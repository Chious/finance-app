"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const data = [
  { label: "Rent", value: 1000 },
  { label: "Groceries", value: 300 },
  { label: "Entertainment", value: 200 },
];

function PieChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = (chartRef.current as HTMLCanvasElement)?.getContext("2d");

    if (!ctx) return;
    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: data.map((item) => item.label),
        datasets: [
          {
            data: data.map((item) => item.value),
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            borderColor: "rgba(0, 0, 0, 0.2)",
            borderWidth: 0,
            weight: 1,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            enabled: true,
          },
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="w-64 h-64 relative">
      <canvas ref={chartRef} />
      <div className="absolute z-100 top-1/3 left-1/3 flex flex-col gap-2">
        <h1 className="text-center">$388</h1>
        <p className="text-gray-500">of $975 limit</p>
      </div>
    </div>
  );
}

export default PieChart;
