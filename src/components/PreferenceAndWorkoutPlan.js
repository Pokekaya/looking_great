import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faFlag,
  faMagicWandSparkles,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const PreferenceAndWorkoutPlan = () => {
  const [time, setTime] = useState("15 min");
  const [type, setType] = useState("weight");
  const [equipment, setEquipment] = useState(["dumbbell"]);
  const [workoutPlan, setWorkoutPlan] = useState(null);

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

  const generateWorkoutPlan = () => {
    setWorkoutPlan({
      warmUp: "5 min",
      workout: time === "15 min" ? "10 min" : "20 min",
      cooldown: "5 min",
    });
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
    </div>
  );
};

export default PreferenceAndWorkoutPlan;
