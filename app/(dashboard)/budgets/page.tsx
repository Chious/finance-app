import Percentage from "@/components/ui/chart/percentage";
import PieChart from "@/components/ui/chart/pie-chart";
import Table from "@/components/ui/table/table";
import React from "react";

export default function Page() {
  return (
    <div>
      <h1>Budget</h1>
      <section className="flex gap-4">
        <div className="bg-white p-4 rounded-md overflow-scroll">
          <PieChart />
          <h2>Spending Summary</h2>
          <Table />
        </div>
        <section className="flex-1 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-md flex flex-col gap-4">
            <h2>Categories</h2>
            <h4>Maximum of $50.00</h4>
            <div className="flex">
              <div className="flex-1 border-l-4 border-black px-4">
                <p>Spent</p>
                <p>$20.00</p>
              </div>
              <div className="flex-1 border-l-4 border-black px-4">
                <p>Remaining</p>
                <p>$20.00</p>
              </div>
            </div>
            <Percentage />

            <div className="bg-yellow/20 rounded-md p-4">
              <h3>Latest Spending</h3>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
