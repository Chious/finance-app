"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import BuggetIcon from "@/public/images/icon-nav-budgets.svg";
import OverviewIcon from "@/public/images/icon-nav-overview.svg";
import PotIcon from "@/public/images/icon-nav-pots.svg";
import RecurringIcon from "@/public/images/icon-nav-recurring-bills.svg";
import TransactionIcon from "@/public/images/icon-nav-transactions.svg";
import LogoL from "@/public/images/logo-large.svg";
import LogoS from "@/public/images/logo-small.svg";

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

type SidebarProps = {
  children: React.ReactNode;
};

export default function Sidebar({ children }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <div className="w-full h-full flex">
      <nav
        className={`bg-black text-white pb-8 p-4 flex-col gap-8 rounded-r-lg transition-all duration-300 ease-in-out hidden lg:visible lg:flex ${
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
      <div className="flex-1 p-4 overflow-scroll mb-20 lg:mb-0">{children}</div>
      <footer className="z-50 fixed flex bottom-0 bg-black w-full p-2 rounded-t-xl items-center justify-between lg:hidden">
        {options.map((option) => (
          <Link
            href={option.href}
            key={option.name}
            className={`flex flex-col items-center justify-center gap-1 p-2 flex-1
              ${pathname === option.href ? "bg-white text-black rounded-t-xl border-b-2 border-green text-bold -mb-4 pb-6" : "text-gray-400"}
              `}
          >
            {option.icon}
            <h5 className=" hidden md:block lg:block">{option.name}</h5>
          </Link>
        ))}
      </footer>
    </div>
  );
}
