import { useState } from "react";
import { RiAddFill } from "react-icons/ri";
import TodayTask from "../StudyPlan/TodayTask";
import Performance from "../ProgressAndGoal/Performance";
import SubjectGrowthChart from "../Analytics/SubjectGrothChart";

const TestCenterHistory = () => {
  const tabs = [
    { label: "AI Suggest", value: "ai", content: <TodayTask /> },
    { label: "Test History", value: "history", content: <Performance /> },
    {
      label: "Tests Analytics",
      value: "analytics",
      content: <SubjectGrowthChart />,
    },
  ];

  const [activeTab, setActiveTab] = useState("ai");

  return (
    <div>
      <div className="flex items-center justify-between mt-7 mb-4">
        <h1 className="md:text-2xl font-semibold">Test Center</h1>
        <button className="text-white text-sm bg-gradient-to-b from-blue-400 to-blue-500 flex items-center gap-1 px-3 py-1.5 rounded-md hover:shadow cursor-pointer transition">
          <RiAddFill className="text-lg" /> New Test
        </button>
      </div>
      {/* Tabs */}
      <div className="bg-blue-50 p-2 rounded-lg mb-4 flex justify-between text-center items-center w-full">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-1.5 rounded-md text-sm w-full font-medium transition-all duration-500 ${
              activeTab === tab.value
                ? "bg-gradient-to-b from-blue-400 to-blue-500 text-white shadow-sm"
                : "text-blue-500 hover:bg-blue-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div>{tabs.find((tab) => tab.value === activeTab)?.content}</div>
    </div>
  );
};

export default TestCenterHistory;
