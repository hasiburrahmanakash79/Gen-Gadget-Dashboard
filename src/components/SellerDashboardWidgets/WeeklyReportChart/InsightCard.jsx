import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const barData = Array.from({ length: 30 }, () => ({
  value: Math.floor(Math.random() * 30 + 10),
}));

const countries = [
  {
    name: "US",
    flag: "🇺🇸",
    sales: 30000,
    growth: 25.8,
    increase: true,
  },
  {
    name: "Brazil",
    flag: "🇧🇷",
    sales: 30000,
    growth: 15.8,
    increase: false,
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    sales: 25000,
    growth: 35.8,
    increase: true,
  },
];

const InsightCard = () => {
  return (
    <div className="bg-white rounded-xl shadow p-5 w-full">
      {/* Top Info */}
      <div className="text-sm text-indigo-600 font-medium">Users in last 30 minutes</div>
      <div className="text-3xl font-bold text-gray-800 mt-1 mb-4">21.5K</div>

      {/* Mini Bar Chart */}
      <div className="h-20">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <Bar dataKey="value" fill="#059669" radius={[4, 4, 0, 0]} barSize={6} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Country Sales */}
      <div className="mt-6 space-y-4">
        <div className="text-sm font-semibold text-gray-600 flex justify-between">
          <span>Sales by Country</span>
          <span>Sales</span>
        </div>

        {countries.map((country, i) => (
          <div key={i} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{country.flag}</span>
              <div className="text-sm">
                <div className="font-semibold text-gray-800">{country.sales / 1000}k</div>
                <div className="text-gray-500 text-xs">{country.name}</div>
              </div>
            </div>
            <div className="flex-1 mx-2 h-2 bg-gray-100 rounded-full">
              <div
                className="h-2 rounded-full bg-indigo-400"
                style={{ width: `${(country.sales / 30000) * 100}%` }}
              ></div>
            </div>
            <div className="text-xs flex items-center gap-1">
              {country.increase ? (
                <FaArrowUp className="text-green-500" />
              ) : (
                <FaArrowDown className="text-red-500" />
              )}
              <span className={`${country.increase ? "text-green-600" : "text-red-500"}`}>
                {country.growth}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-6">
        <button className="w-full border border-indigo-500 text-indigo-500 rounded-lg py-2 text-sm font-medium hover:bg-indigo-50 transition">
          View Insight
        </button>
      </div>
    </div>
  );
};

export default InsightCard;
