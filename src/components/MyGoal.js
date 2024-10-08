import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const MyGoal = () => {
  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        label: "My Goal",
        data: [80, 20],
        backgroundColor: ["#f4d35e", "#ebebd3"],
        hoverOffset: 4,
      },
    ],
  };

  // Extract the percentage of completion
  const completionPercentage = data.datasets[0].data[0];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div className="card text-center" style={{ height: "40vh" }}>
      <div className="card-body">
        <h5 className="card-title">My Goal - {completionPercentage}%</h5>
        <div
          style={{
            position: "relative",
            margin: "auto",
            width: "80%",
            height: "80%",
          }}
        >
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default MyGoal;
