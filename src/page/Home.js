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
        <div className="container-fluid">
          <div className="row mb-4">
            <div className="col-lg-8 col-md-7 mb-4 mb-md-0">
              <TrainingHistory />
            </div>
            <div className="col-lg-4 col-md-5">
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
