import React from "react";

export default function Percentage({ total = 100, spent = 50, height = 50 }) {
  const percentage = (spent / total) * 100;

  return (
    <div
      className={`relative w-full bg-yellow/20 rounded-md ${height > 10 ? "p-2" : ""}`}
      style={{ height: `${height}px` }}
    >
      <div
        className={`relative w-[${percentage}%] h-full bg-gray-400 z-10 rounded-md duration-100`}
      />
    </div>
  );
}
