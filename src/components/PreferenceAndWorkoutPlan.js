import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faFlag,
  faMagicWandSparkles,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { authContext } from '../context/authContext'; 

const PreferenceAndWorkoutPlan = () => {
  const { authToken } = useContext(authContext);
  const [time, setTime] = useState("15 min");
  const [type, setType] = useState("weight");
  const [equipment, setEquipment] = useState(["dumbbell"]);
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [combinedData, setCombinedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTimeChange = (event) => setTime(event.target.value);
  const handleTypeChange = (event) => setType(event.target.value);
  const handleEquipmentChange = (event) => {
    const value = event.target.value;
    setEquipment((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const fetchActivities = async () => {
    const endDate = Math.floor(Date.now() / 1000); // Current time in seconds since epoch
    const startDate = endDate - 7 * 24 * 60 * 60; // 7 days ago

    try {
      const response = await fetch(
        `https://www.strava.com/api/v3/athlete/activities?after=${startDate}&before=${endDate}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch activities from Strava.");
      }

      const data = await response.json();

      // Filter activities to include only relevant fields
      const filteredActivities = data.map((activity) => ({
        type: activity.type,
        sport_type: activity.sport_type,
        workout_type: activity.workout_type,
        moving_time: activity.moving_time,
        distance: activity.distance,
        total_elevation_gain: activity.total_elevation_gain,
        average_speed: activity.average_speed,
        average_watts: activity.average_watts,
        kilojoules: activity.kilojoules,
        average_heartrate: activity.average_heartrate,
        max_heartrate: activity.max_heartrate,
        suffer_score: activity.suffer_score,
      }));

      return filteredActivities;
    } catch (error) {
      console.error("Error fetching Strava activities:", error);
      throw new Error("Could not retrieve activities from Strava.");
    }
  };

  const generateWorkoutPlan = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!authToken) {
        throw new Error("Authentication token is missing.");
      }

      const fetchedActivities = await fetchActivities();

      // Combine preferences with fetched activities
      const combinedData = {
        preferences: {
          time,
          type,
          equipment,
        },
        activities: fetchedActivities,
      };

      setCombinedData(combinedData);

    } catch (err) {
      console.error("Error generating combined data:", err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Preferences Section */}
        <div className="card m-0">
          <div className="card-body">
            <h5 className="card-title">Preferences</h5>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column align-items-center mb-3">
                <label>
                  <FontAwesomeIcon icon={faClock} /> Time
                </label>
                <div>
                  <input
                    type="radio"
                    name="time"
                    value="15 min"
                    checked={time === "15 min"}
                    onChange={handleTimeChange}
                  />{" "}
                  15 min
                  <br />
                  <input
                    type="radio"
                    name="time"
                    value="20 min"
                    checked={time === "20 min"}
                    onChange={handleTimeChange}
                  />{" "}
                  20 min
                </div>
              </div>
              <div className="border-start mx-3"></div> {/* Divider */}
              <div className="d-flex flex-column align-items-center mb-3">
                <label>
                  <FontAwesomeIcon icon={faFlag} /> Type
                </label>
                <div>
                  <input
                    type="radio"
                    name="type"
                    value="weight"
                    checked={type === "weight"}
                    onChange={handleTypeChange}
                  />{" "}
                  Weight
                  <br />
                  <input
                    type="radio"
                    name="type"
                    value="cardio"
                    checked={type === "cardio"}
                    onChange={handleTypeChange}
                  />{" "}
                  Cardio
                </div>
              </div>
              <div className="border-start mx-3"></div> {/* Divider */}
              <div className="d-flex flex-column align-items-center mb-3">
                <label>
                  <FontAwesomeIcon icon={faDumbbell} /> Equipment
                </label>
                <div>
                  <input
                    type="checkbox"
                    value="dumbbell"
                    checked={equipment.includes("dumbbell")}
                    onChange={handleEquipmentChange}
                  />{" "}
                  Dumbbell
                  <br />
                  <input
                    type="checkbox"
                    value="resistant band"
                    checked={equipment.includes("resistant band")}
                    onChange={handleEquipmentChange}
                  />{" "}
                  Resistant Band
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-12 text-center">
          {/* Generate Button */}
          <button
            className="btn"
            onClick={generateWorkoutPlan}
            style={{
              backgroundColor: "#ee964b", // Button color
              color: "#fcfce1", // Text color
              padding: "10px",
              width: "50%",
              border: "none",
              transition: "background-color 0.2s ease",
            }}
            onMouseDown={(e) =>
              (e.currentTarget.style.backgroundColor = "#062f5b")
            }
            onMouseUp={(e) =>
              (e.currentTarget.style.backgroundColor = "#083d77")
            }
          >
            <FontAwesomeIcon icon={faMagicWandSparkles} /> Generate
          </button>
        </div>
      </div>

      <div className="row mt-4">
        <div
          className="card border"
          style={{ height: "20vh", overflow: "hidden" }}
        >
          <div className="card-body">
            <h5 className="card-title">My Workout Plan</h5>
            {workoutPlan && (
              <>
                <p>Warm Up: {workoutPlan.warmUp}</p>
                <p>Workout: {workoutPlan.workout}</p>
                <p>Cooldown: {workoutPlan.cooldown}</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="card border" style={{ height: '20vh', overflow: 'auto' }}>
          <div className="card-body">
            <h5 className="card-title">Fetched Activities</h5>
            {combinedData ? (
              <pre>{JSON.stringify(combinedData, null, 2)}</pre>
            ) : (
              <p>No activities found yet.</p>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default PreferenceAndWorkoutPlan;
