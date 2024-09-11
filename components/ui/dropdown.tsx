import React from "react";
import { DropdownMenu } from "@radix-ui/themes";

type Options = {
  option: string;
  color?: string;
};

const options: Options[] = [
  {
    option: "Edit Pot",
    color: "black",
  },
  {
    option: "Delete",
    color: "red",
  },
];

export default function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className=" outline-none aspect-square">:</button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {options.map((option, index) => (
          <>
            <DropdownMenu.Item key={index}>
              <button className={`w-full text-${option.color}-500`}>
                {option.option}
              </button>
            </DropdownMenu.Item>
            {index !== options.length - 1 && <DropdownMenu.Separator />}
          </>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
