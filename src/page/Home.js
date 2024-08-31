import React from "react";
import Sidebar from "../components/Sidebar";
import TrainingHistory from "../components/TrainingHistory";
import MyGoal from "../components/MyGoal";
import PreferenceAndWorkoutPlan from "../components/PreferenceAndWorkoutPlan";

function Home() {
  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-8">
              <TrainingHistory />
            </div>
            <div className="col-md-4">
              <MyGoal />
            </div>
          </div>
          <div className="mt-4">
          <PreferenceAndWorkoutPlan />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;