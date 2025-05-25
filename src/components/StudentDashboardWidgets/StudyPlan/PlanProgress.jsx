// import React from 'react';

const PlanProgress = () => {
  return (
    <div className="border border-base-300 rounded-2xl p-4 flex-1">
      <div className="border-b border-base-300 pb-3 text-gray-500 flex items-center justify-between mb-5">
        <h4 className="">AI Study Plan Progress</h4>
        <select className="text-sm px-2 py-1 rounded-md outline-none text-gray-700"  name="Weekly" id="">
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <div className="">
        <div className="flex justify-between items-center">
          <p>MCQ test</p>{" "}
          <p>70%</p>
        </div>
        <div className="w-full bg-gray-200 h-3 rounded-full">
          <div
            className="h-3 rounded-full bg-gradient-to-b from-blue-300 to-blue-500"
            style={{ width: `70%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p>Written Test</p>{" "}
          <p>30%</p>
        </div>
        <div className="w-full bg-gray-200 h-3 rounded-full">
          <div
            className="h-3 rounded-full bg-gradient-to-b from-blue-300 to-blue-500"
            style={{ width: `30%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PlanProgress;
