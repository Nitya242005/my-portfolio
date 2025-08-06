// src/components/SkillPieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function SkillPieChart() {
  const data = {
    labels: [
      "HTML", "CSS", "JavaScript", "React", "Bootstrap",
      "Python", "C++", "Django", "Machine Learning", "Deep Learning"
    ],
    datasets: [
      {
        label: "Skill Confidence",
        data: [100, 95, 90, 90, 87, 95, 85, 89, 90, 80],
        backgroundColor: [
          "#f87171", "#fb923c", "#facc15", "#4ade80", "#60a5fa",
          "#a78bfa", "#f472b6", "#34d399", "#fcd34d", "#c084fc"
        ],
        borderColor: "#1f2937",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#fff",
          padding: 20
        }
      }
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-light mb-4">Skill Confidence Breakdown</h2>
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default SkillPieChart;
