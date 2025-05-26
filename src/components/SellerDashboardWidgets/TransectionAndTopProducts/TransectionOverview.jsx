import { useState } from "react";

const transactionHistory = [
  {
    customerId: "CUST1001",
    orderDate: "01 Oct | 11:29 am",
    status: "Completed",
    amount: 149.99,
  },
  {
    customerId: "CUST1002",
    orderDate: "01 Oct | 12:45 pm",
    status: "Pending",
    amount: 89.5,
  },
  {
    customerId: "CUST1003",
    orderDate: "01 Oct | 02:10 pm",
    status: "Cancelled",
    amount: 0.0,
  },
  {
    customerId: "CUST1004",
    orderDate: "01 Oct | 03:22 pm",
    status: "Completed",
    amount: 245.0,
  },
  {
    customerId: "CUST1005",
    orderDate: "01 Oct | 04:55 pm",
    status: "Completed",
    amount: 109.49,
  },
  {
    customerId: "CUST1006",
    orderDate: "01 Oct | 05:30 pm",
    status: "Pending",
    amount: 199.0,
  },
  {
    customerId: "CUST1007",
    orderDate: "01 Oct | 06:15 pm",
    status: "Completed",
    amount: 310.75,
  },
];

const TransectionOverview = () => {
  const [filter, setFilter] = useState("default");

  const sortedData = [...transactionHistory].sort((a, b) => {
    if (filter === "lowToHigh") return a.amount - b.amount;
    if (filter === "highToLow") return b.amount - a.amount;
    return 0;
  });

  return (
    <div className="border border-gray-100 shadow rounded-2xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Transaction</h1>
        <div className="flex items-center gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-[#006850] rounded py-1 px-2 text-white text-xs"
          >
            <option value="default">Filter</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="border-b border-gray-200">
            <tr>
              <th className="py-2">NO</th>
              <th className="py-2">Customer ID</th>
              <th className="py-2">Order Date</th>
              <th className="py-2">Status</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((history, idx) => (
              <tr key={idx}>
                <td className="py-4">{idx + 1}.</td>
                <td>#{history.customerId}</td>
                <td>{history.orderDate}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        history.status === "Completed"
                          ? "bg-green-500"
                          : history.status === "Pending"
                          ? "bg-yellow-500"
                          : history.status === "Cancelled"
                          ? "bg-red-500"
                          : "bg-gray-400"
                      }`}
                    ></div>
                    <span>{history.status}</span>
                  </div>
                </td>
                <td>${history.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-end items-center">
        <button className="border border-indigo-400 text-indigo-600 px-4 py-1 text-sm rounded-full hover:bg-indigo-50 transition">
          Details
        </button>
      </div>
    </div>
  );
};

export default TransectionOverview;
