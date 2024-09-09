"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import BuggetIcon from "@/images/icon-nav-budgets.svg";
import OverviewIcon from "@/images/icon-nav-overview.svg";
import PotIcon from "@/images/icon-nav-pots.svg";
import RecurringIcon from "@/images/icon-nav-recurring-bills.svg";
import TransactionIcon from "@/images/icon-nav-transactions.svg";
import LogoL from "@/images/logo-large.svg";
import LogoS from "@/images/logo-small.svg";

const options = [
  {
    name: "Overview",
    icon: <OverviewIcon className="svg-active" />,
    iconNotActive: <OverviewIcon />,
    href: "/overview",
  },
  {
    name: "Transactions",
    icon: <TransactionIcon className="svg-active" />,
    iconNotActive: <TransactionIcon />,
    href: "/transactions",
  },
  {
    name: "Budgets",
    icon: <BuggetIcon className="svg-active" />,
    iconNotActive: <BuggetIcon />,
    href: "/budgets",
  },
  {
    name: "Pots",
    icon: <PotIcon className="svg-active" />,
    iconNotActive: <PotIcon />,
    href: "/pots",
  },
  {
    name: "Recurring Bills",
    icon: <RecurringIcon className="svg-active" />,
    iconNotActive: <RecurringIcon />,
    href: "/recurring-bills",
  },
];
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav
      className={`bg-black text-white pb-8 p-4 flex flex-col gap-8 rounded-r-lg transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {isOpen ? <LogoL className="ml-2" /> : <LogoS className="ml-2" />}
      <div className="btn-group flex flex-col gap-3 flex-1 whitespace-nowrap">
        {options.map((option) => (
          <Link
            key={option.name}
            href={option.href}
            className={`rounded-r-md flex gap-2 items-center p-2 h-12 ${pathname === option.href ? "bg-white text-black -ml-4 border-l-4 border-green" : ""}`}
          >
            {pathname === option.href ? option.icon : option.iconNotActive}
            <span className={!isOpen ? "hidden" : ""}>{option.name}</span>
          </Link>
        ))}
      </div>
      <button
        className=" text-white p-2 rounded-md flex items-center gap-2"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <BuggetIcon />
        <p className={!isOpen ? "hidden" : ""}> Minize Menu</p>
      </button>
    </nav>
  );
}
