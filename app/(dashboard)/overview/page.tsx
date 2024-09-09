import PieChart from "@/components/ui/chart/pie-chart";
import Table from "@/components/ui/table/table";
import React from "react";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col gap-4 overflow-scroll">
      <h1>Overview</h1>
      <section className="flex gap-4">
        <div className="text-white bg-black p-2 rounded-md flex-1">
          <p>Current Balance</p>
          <h2>$2,500</h2>
        </div>
        <div className="bg-white text-black p-2 rounded-md flex-1">
          <h2>Income</h2>
          <p>$5,000</p>
        </div>
        <div className="bg-white text-black p-2 rounded-md flex-1">
          <h2>Expenses</h2>
          <p>$2,500</p>
        </div>
      </section>
      <section className="grid lg:grid-rows-5 lg:grid-cols-3 gap-4 w-full h-full">
        <div className="bg-white p-4 lg:col-span-2 lg:row-span-2 rounded-md">
          <div className="flex justify-between">
            <h3>Savings Pots</h3>
            <h4>See Details</h4>
          </div>
        </div>
        <div className="bg-white p-4 lg:row-span-3 rounded-md">
          <div className="flex justify-between">
            <h3>Budgets</h3>
            <h4>See Details</h4>
          </div>
          <PieChart />
        </div>
        <div className="bg-white p-4 lg:col-span-2 lg:row-span-3 rounded-md">
          <div className="flex justify-between">
            <h3>Transactions</h3>
            <h4>See Details</h4>
          </div>
          <Table />
        </div>
        <div className="bg-white p-4 rounded-md lg:row-span-2">
          <div className="flex justify-between">
            <h3>Recurring Bills</h3>
            <h4>See Details</h4>
          </div>
        </div>
      </section>
    </div>
  );
}
