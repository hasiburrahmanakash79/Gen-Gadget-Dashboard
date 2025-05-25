// src/components/DashboardWidgets/ProgressStatCard.jsx
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ProgressStatCard = ({ title, value, change, changeType }) => {
  return (
    <div className="border border-base-300 rounded-2xl p-4 flex-1">
      <div className="border-b border-base-300 pb-3 text-gray-500 flex items-center justify-between">
        <h4 className="">{title}</h4>
        <select className="text-sm px-2 py-1 rounded-md outline-none text-gray-700" name="Weekly" id="">
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <div className="mt-2">
        <span className="text-3xl font-bold">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 h-3 rounded-full mt-4">
        <div
          className="h-3 rounded-full bg-gradient-to-b from-blue-300 to-blue-500"
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <div className="flex items-center text-sm mt-5">
        {changeType === "up" ? (
          <FaArrowUp className="text-green-500" />
        ) : (
          <FaArrowDown className="text-red-500" />
        )}
        <span
          className={`mx-1 ${
            changeType === "up" ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </span>
        <span className="text-gray-500">From Last Week</span>
      </div>
    </div>
  );
};

export default ProgressStatCard;
