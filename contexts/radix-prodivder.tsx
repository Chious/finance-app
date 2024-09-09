"use client";
import { Theme } from "@radix-ui/themes";
import React from "react";

export default function RadixProdivder({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Theme
      accentColor="crimson"
      grayColor="sand"
      radius="large"
      className=" w-screen h-screen"
    >
      {children}
    </Theme>
  );
}
