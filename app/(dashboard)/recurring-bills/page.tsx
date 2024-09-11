import React from "react";
import RecurringIcon from "@/public/images/icon-recurring-bills.svg";
import Table from "@/components/ui/table/table";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Recurring Bills</h1>
      <div className="flex gap-4">
        <section className="flex-1 flex flex-col gap-4">
          <div className="bg-black text-white rounded-md p-4 h-[200px] justify-between flex flex-col">
            <RecurringIcon />
            <div className="flex flex-col gap-4">
              <h4>Total Bills</h4>
              <h2>$1,000.00</h2>
            </div>
          </div>
          <div className="bg-white text-black rounded-md p-4">
            <h2>Summary</h2>
            <div>
              <div className="flex justify-between items-center gap-4 py-4">
                <h4>Paid Bills</h4>
                <h4 className="text-bold">4($100.00)</h4>
              </div>
              <div className="border border-gray-600/20" />
              <div className="flex justify-between items-center gap-4 py-4">
                <h4>Total Upcoming</h4>
                <h4 className="text-bold">4($100.00)</h4>
              </div>
              <div className="border border-gray-600/20" />
              <div className="flex justify-between items-center gap-4 py-4 text-red">
                <h4>Due Soon</h4>
                <h4 className="text-bold">4($100.00)</h4>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white p-4 rounded-md flex-1 overflow-scroll">
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search Bills"
              className="border border-gray-500 p-2 rounded-md outline-none"
            />
            <button className="bg-black text-white rounded-md p-2">
              Add Bill
            </button>
          </div>
          <Table />
        </section>
      </div>
    </div>
  );
}
