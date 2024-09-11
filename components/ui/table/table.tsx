"use client";

import * as React from "react";
import { Suspense } from "react";
import data from "@/data/data.json";
import Image from "next/image";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { formattedDate } from "@/utils/math";
import Dropdown from "../dropdown";

const transactions = data.transactions;

type Transactions = (typeof transactions)[0];

const columnHelper = createColumnHelper<Transactions>();

const columns = [
  columnHelper.accessor((row) => row.avatar, {
    id: "Recipient / Sender",
    cell: (info) => (
      <Suspense fallback={<div>Loading...</div>}>
        <Image
          src={info.row.original.avatar}
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        />
      </Suspense>
    ),
    header: () => <h4>Recipient / Sender</h4>,
    footer: (info) => info.column.id,
    size: 20,
  }),
  columnHelper.accessor("name", {
    header: () => "",
    cell: (info) => <h4>{info.renderValue()}</h4>,
    footer: (info) => info.column.id,
    size: 100,
  }),
  columnHelper.accessor("category", {
    header: () => <h4>Category</h4>,
    footer: (info) => info.column.id,
    cell: (info) => <h4>{info.renderValue()}</h4>,
    size: 100,
  }),
  columnHelper.accessor("date", {
    header: () => <h4>Transaction Date</h4>,
    cell: (info) => <h4>{formattedDate(info.row.original.date)}</h4>,
    footer: (info) => info.column.id,
    size: 100,
  }),
  columnHelper.accessor("amount", {
    header: () => <h4>Amount</h4>,
    cell: (info) => (
      <h4
        className={`text-bold ${info.row.original.amount > 0 ? "text-green" : ""}`}
      >
        $ {info.renderValue()}
      </h4>
    ),
    footer: (info) => info.column.id,
    size: 100,
  }),
];

export default function Table() {
  const data = React.useMemo(() => transactions, []);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <div className="p-4 bg-white rounded-md w-full h-full">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search Transactions"
          className="border border-gray-500 p-2 rounded-md outline-none"
        />
        <Dropdown />
        <Dropdown />
      </div>
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="text-start py-2 text-gray-400">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-2 border-b border-gray-400/10">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"< Prev"}
        </button>
        <div className="flex gap-2 py-4">
          {[...Array(table.getPageCount())].map((_, index) => (
            <button
              key={index}
              className={`border rounded  p-1 w-8 ${pagination.pageIndex === index ? "bg-black text-white" : ""}`}
              onClick={() => table.setPageIndex(index)}
              disabled={table.getState().pagination.pageIndex === index}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {"Next >"}
        </button>
      </div>
    </div>
  );
}
