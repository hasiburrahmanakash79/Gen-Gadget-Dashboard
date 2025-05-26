import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const tabs = [
  { label: "Customers", key: "customers" },
  { label: "Total Products", key: "totalProducts" },
  { label: "Stock Products", key: "stockProducts" },
  { label: "Out of Stock", key: "outOfStock" },
  { label: "Revenue", key: "revenue" },
];

const thisWeekData = {
  customers: [12000, 25000, 25000, 15000, 35000, 15000, 30000],
  totalProducts: [3000, 3100, 3000, 2900, 2950, 3100, 3500],
  stockProducts: [2000, 2200, 2300, 2100, 2400, 2300, 2500],
  outOfStock: [400, 500, 450, 550, 600, 480, 500],
  revenue: [100000, 150000, 120000, 110000, 170000, 130000, 250000],
};

const lastWeekData = {
  customers: [10000, 20000, 18000, 14000, 32000, 12000, 25000],
  totalProducts: [2900, 3000, 2950, 2850, 2800, 2950, 3200],
  stockProducts: [1900, 2000, 2050, 2000, 2150, 2200, 2400],
  outOfStock: [450, 480, 420, 500, 550, 470, 490],
  revenue: [95000, 140000, 110000, 100000, 150000, 120000, 230000],
};

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const WeeklyReportChart = () => {
  const [selectedTab, setSelectedTab] = useState("customers");
  const [week, setWeek] = useState("this");

  const getChartData = () => {
    const data = week === "this" ? thisWeekData : lastWeekData;
    return data[selectedTab].map((value, index) => ({
      name: days[index],
      value,
    }));
  };

  const data = getChartData();

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Report for this week</h2>
        <div className="flex gap-2 bg-gray-100 rounded-xl text-sm p-1">
          <button
            onClick={() => setWeek("this")}
            className={`px-4 py-1.5 rounded-xl ${
              week === "this" ? "bg-white text-green-600 shadow" : ""
            }`}
          >
            This week
          </button>
          <button
            onClick={() => setWeek("last")}
            className={`px-4 py-1.5 rounded-xl ${
              week === "last" ? "bg-white text-green-600 shadow" : ""
            }`}
          >
            Last week
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 text-center border-b border-gray-100 mb-5">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            onClick={() => setSelectedTab(tab.key)}
            className={`cursor-pointer py-2 ${
              selectedTab === tab.key
                ? "border-b-2 border-green-600 text-green-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            <div className="text-lg">
              {week === "this"
                ? thisWeekData[tab.key].slice(-1)[0]
                : lastWeekData[tab.key].slice(-1)[0]}
              {tab.key === "revenue" ? "k" : tab.key === "customers" ? "k" : ""}
            </div>
            <div className="text-xs">{tab.label}</div>
          </div>
        ))}
      </div>

      <div className="h-64 -ml-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: 20, right: 20 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="#16a34a" stopOpacity={0.3} />
                <stop offset="90%" stopColor="#16a34a" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{ fontSize: "12px" }}
              labelStyle={{ fontWeight: "bold" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#16a34a"
              fill="url(#colorValue)"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyReportChart;
