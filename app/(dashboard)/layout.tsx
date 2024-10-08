import React from "react";
import type { Metadata } from "next";
import Sidebar from "../../components/sidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full h-full bg-yellow/20">
      <Sidebar>{children}</Sidebar>
    </main>
  );
}
