import React, { PropsWithChildren, ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button"> & {
  className?: string;
  props?: PropsWithChildren;
};

export default function Button({ children, props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-yellow/20 p-2 w-full rounded-md border border-transparent hover:bg-white hover:border-gray-500 duration-300 transition"
    >
      {children}
    </button>
  );
}
