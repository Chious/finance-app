import React from "react";
import Button from "../ui/button";
import Dropdown from "../ui/dropdown";
import DialogComponent from "../dialog/dialog-add-pot";
import PotCount from "./pot-count";
import DialogWithdraw from "../dialog/dialog-withdraw-pot";

export default function PotCard() {
  return (
    <div className="bg-white rounded-md p-4 flex flex-col gap-4">
      <div className="justify-between flex">
        <h2>Savings</h2>
        <Dropdown />
      </div>

      <PotCount />

      <div className="flex gap-4 text-bold">
        <DialogComponent
          trigger={
            <Button>
              <h4>+ Add Money</h4>
            </Button>
          }
        />
        <DialogWithdraw
          trigger={
            <Button>
              <h4>Withdraw Money</h4>
            </Button>
          }
        />
      </div>
    </div>
  );
}
