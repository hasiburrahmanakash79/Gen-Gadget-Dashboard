// import React from 'react';
import { LineChart } from "@mui/x-charts/LineChart";

const StudentProgressChart = () => {
  const studentProgress = [
    { date: "Feb 02", Beginner: 1, Learner: 2, Proficient: 5, Advanced: 3, Elite: 1 },
    { date: "Feb 09", Beginner: 3, Learner: 3, Proficient: 2, Advanced: 2, Elite: 2 },
    { date: "Feb 16", Beginner: 2, Learner: 2, Proficient: 3, Advanced: 3, Elite: 3 },
    { date: "Feb 23", Beginner: 3, Learner: 2, Proficient: 4, Advanced: 4, Elite: 2 },
    { date: "Feb 30", Beginner: 2, Learner: 3, Proficient: 3, Advanced: 2, Elite: 3 },
    { date: "Mar 06", Beginner: 3, Learner: 2, Proficient: 4, Advanced: 3, Elite: 2 },
    { date: "Mar 13", Beginner: 2, Learner: 1, Proficient: 3, Advanced: 2, Elite: 1 },
  ];

  const Beginner = studentProgress.map((item) => item.Beginner);
  const Learner = studentProgress.map((item) => item.Learner);
  const Proficient = studentProgress.map((item) => item.Proficient);
  const Advanced = studentProgress.map((item) => item.Advanced);
  const Elite = studentProgress.map((item) => item.Elite);
  const xLabels = studentProgress.map((item) => item.date);

  return (
    <div className="bg-white rounded-3xl p-5 border border-base-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">All Progress</h2>
        
      </div>

      <LineChart
        height={300}
        xAxis={[
          {
            scaleType: "point",
            data: xLabels,
            tickLabelStyle: {
              fontSize: 12,
              fill: "#999",
            },
          },
        ]}
        yAxis={[
          {
            tickMinStep: 1,
            tickLabelStyle: {
              fontSize: 12,
              fill: "#999",
            },
          },
        ]}
        grid={{ horizontal: true, vertical: false }}
        series={[
          {
            data: Beginner,
            label: "Beginner",
            color: "#3B82F6", // blue-500
            curve: "monotone",
          },
          {
            data: Learner,
            label: "Learner",
            color: "#0EA5E9", // sky-400
            curve: "monotone",
          },
          {
            data: Proficient,
            label: "Proficient",
            color: "#10B981", // emerald-500
            curve: "monotone",
          },
          {
            data: Advanced,
            label: "Advanced",
            color: "#FACC15", // yellow-400
            curve: "monotone",
          },
          {
            data: Elite,
            label: "Elite",
            color: "#A855F7", // purple-500
            curve: "monotone",
          },
        ]}
        margin={{ top: 10, right: 20, bottom: 30, left: 40 }}
        sx={{
          ".MuiLineElement-root": {
            strokeWidth: 1,
          },
          ".MuiMarkElement-root": {
            display: "none",
          },
        }}
      />
    </div>
  );
};

export default StudentProgressChart;
