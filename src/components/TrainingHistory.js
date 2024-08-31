import React, { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

const TrainingHistory = () => {
  const chartRef = useRef(null);

  const data = {
    labels: [
      "Day 1",
      "Day 2",
      "Day 3",
      "Day 4",
      "Day 5",
      "Day 6",
      "Day 7",
      "Day 8",
      "Day 9",
      "Day 10",
      "Day 11",
      "Day 12",
      "Day 13",
      "Day 14",
    ],
    datasets: [
      {
        label: "Performance",
        data: [75, 80, 46, 50, 40, 34, 20, 64, 42, 97, 94, 96, 98, 100],
        fill: false,
        // borderColor: "rgb(75, 192, 192)",
        borderColor: "#f4d35e", // Change the line color here
        backgroundColor: "#f4d35e", // Change the color of points on the line
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Important for resizing
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="card" style={{ height: "40vh" }}>
      <div className="card-body">
        <h5 className="card-title">Training History</h5>
        <div
          style={{
            position: "relative",
            margin: "auto",
            width: "80%",
            height: "80%",
          }}
        >
          <Line ref={chartRef} data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TrainingHistory;
