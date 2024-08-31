import React, { useState } from "react";
import { generateWorkoutPlan } from '../api/api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell, faFlag, faMagicWandSparkles, faClock
} from "@fortawesome/free-solid-svg-icons";

const PreferenceAndWorkoutPlan = () => {
  const [time, setTime] = useState("15 min");
  const [type, setType] = useState("weight");
  const [equipment, setEquipment] = useState(["dumbbell"]);
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const generateWorkoutPlan1 = () => {
    setWorkoutPlan({
      warmUp: "5 min",
      workout: time === "15 min" ? "10 min" : "20 min",
      cooldown: "5 min",
    });
  };
  const handleGenerateWorkoutPlan = async () => {
    setLoading(true);
    setError(null);

    try {
      const plan = await generateWorkoutPlan({
        goal: type === "weight" ? "build muscle" : "improve cardio",
        duration: time === "15 min" ? 15 : 20,
        experienceLevel: "intermediate" 
      });
      setWorkoutPlan(plan);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Preferences Section */}
        <div className="card m-0">
          <div className="card-body">
            <h5 className="card-title">Preferences</h5>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column align-items-center mb-3">
                <label><FontAwesomeIcon icon={faClock} /> Time</label>
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
                <label><FontAwesomeIcon icon={faFlag} /> Type</label>
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
                <label><FontAwesomeIcon icon={faDumbbell} /> Equipment</label>
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
            className="btn btn-primary"
            //onClick={generateWorkoutPlan}
            onClick={handleGenerateWorkoutPlan}
            style={{ padding: "10px", width: "50%" }}
            >
            {loading ? (
              <>
              <FontAwesomeIcon icon={faMagicWandSparkles} /> Generating...
              </>
            ) : (
              <>
              <FontAwesomeIcon icon={faMagicWandSparkles} /> Generate
              </>
            )}
          </button>
        </div>
      </div>

      <div className="row mt-4">
        <div className="card border" style={{ height: '20vh', overflow: 'hidden' }}>
          <div className="card-body">
            <h5 className="card-title">My Workout Plan</h5>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message*/}
            
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
    </div>
  );
};

export default PreferenceAndWorkoutPlan;
