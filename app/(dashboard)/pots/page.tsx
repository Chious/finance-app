import PotCard from "@/components/card/pot-card";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1>Pots</h1>
        <button className="bg-blue-500 bg-black text-white p-4 rounded-md">
          <h3>+ Add New Pot</h3>
        </button>
      </div>
      <section className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PotCard />
        <PotCard />
        <PotCard />
        <PotCard />
        <PotCard />
        <PotCard />
      </section>
    </div>
  );
}
