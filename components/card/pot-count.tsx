import React from "react";
import Percentage from "../ui/chart/percentage";

export default function PotCount() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h4 className="text-gray-500">Total Saved</h4>
        <h1>$5,000</h1>
      </div>

      <Percentage height={10} />

      <div className="flex justify-between items-center text-gray-500">
        <h4>66.6%</h4>
        <h4>Target of $2000</h4>
      </div>
    </>
  );
}
