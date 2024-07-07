import React, { useState, useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import {
  generateDummyData,
  Transaction,
} from "../user/eventorganizer/transactionlist";

const columns: TableColumn<Transaction>[] = [
  {
    name: "Company",
    selector: (row) => row.companyName,
    sortable: true,
  },
  {
    name: "Amount",
    selector: (row) => row.amount,
    sortable: true,
    right: true,
    format: (row) => `$${row.amount.toLocaleString()}`,
  },
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
    format: (row) => new Date(row.date).toLocaleDateString(),
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    cell: (row) => (
      <span
        className={`py-1 px-3 rounded-full text-xs ${
          row.status === "Completed"
            ? "bg-green-200 text-green-900"
            : "bg-yellow-200 text-yellow-900"
        }`}
      >
        {row.status}
      </span>
    ),
  },
];

const TransactionsList: React.FC = () => {
  const [timeRange, setTimeRange] = useState<"day" | "month" | "year">("day");
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    setTransactions(generateDummyData(timeRange));
  }, [timeRange]);

  const handleTimeRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTimeRange = e.target.value as "day" | "month" | "year";
    setTimeRange(newTimeRange);
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h3 className="text-xl font-bold mb-4">Transaction Details</h3>
      <div className="mb-4">
        <label
          htmlFor="timeRangeSelect"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Select Time Range:
        </label>
        <select
          id="timeRangeSelect"
          value={timeRange}
          onChange={handleTimeRangeChange}
          className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="day">Day</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>
      <DataTable
        columns={columns}
        data={transactions}
        defaultSortFieldId={3}
        pagination
      />
    </div>
  );
};

export default TransactionsList;
