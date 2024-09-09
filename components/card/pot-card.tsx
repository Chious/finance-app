import React from "react";
import Button from "../ui/chart/button";
import Percentage from "../ui/chart/percentage";
import Dropdown from "../ui/dropdown";

export default function PotCard() {
  return (
    <div className="bg-white rounded-md p-4 flex flex-col gap-4">
      <div className="justify-between flex">
        <h2>Savings</h2>
        <Dropdown />
      </div>

      <div className="flex justify-between items-center">
        <h4 className="text-gray-500">Total Saved</h4>
        <h1>$5,000</h1>
      </div>

      <Percentage height={10} />

      <div className="flex justify-between items-center text-gray-500">
        <h4>66.6%</h4>
        <h4>Target of $2000</h4>
      </div>

      <div className="flex gap-4 text-bold">
        <Button>
          <h4>+ Add Money</h4>
        </Button>
        <Button>
          <h4>Withdraw</h4>
        </Button>
      </div>
    </div>
  );
}
