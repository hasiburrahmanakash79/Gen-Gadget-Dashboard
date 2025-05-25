import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { date: "Feb 02", weeklyGoal: 1, achieve: 3 },
  { date: "Feb 09", weeklyGoal: 3, achieve: 1 },
  { date: "Feb 16", weeklyGoal: 2, achieve: 2 },
  { date: "Feb 23", weeklyGoal: 3, achieve: 5 },
  { date: "Feb 30", weeklyGoal: 9, achieve: 4 },
  { date: "Mar 06", weeklyGoal: 3, achieve: 6 },
  { date: "Mar 13", weeklyGoal: 1, achieve: 2 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    const weeklyGoal = payload.find((p) => p.dataKey === "weeklyGoal")?.value;
    const achieve = payload.find((p) => p.dataKey === "achieve")?.value;

    return (
      <div className="border border-gray-200 rounded-md shadow-md px-4 py-2 text-sm text-gray-800">
        <p className="text-sm font-semibold mb-1">{label}</p>
        <div className="flex flex-col gap-1">
          <p>
            <span className="inline-block w-2 h-2 rounded-full bg-black mr-2" />
            Weekly Goal: <span className="font-medium">{weeklyGoal}</span>
          </p>
          <p>
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2" />
            Achieve: <span className="font-medium">{achieve}</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export default function StudentsGoalChart() {
  return (
    <div className="">
      <h4 className="text-xl font-semibold mb-4">Students Goal Analytics</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, bottom: 0, left: 10 }}
        >
          <CartesianGrid strokeDasharray="1 1" vertical={false} />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis
            domain={[
              (dataMin) => Math.floor(dataMin - 1),
              (dataMax) => Math.ceil(dataMax + 1),
            ]}
            tickCount={10}
            tick={{ fontSize: 12 }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconSize={12}
            iconType="circle"
            formatter={(value) => (
              <span className="text-sm text-gray-700 capitalize">{value}</span>
            )}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "#cccddd", strokeWidth: 1 }}
          />
          <Line
            type="monotone"
            dataKey="weeklyGoal"
            stroke="#000000"
            strokeWidth={2}
            dot={false}
            name="Weekly Goal"
          />
          <Line
            type="monotone"
            dataKey="achieve"
            stroke="#1E90FF"
            strokeWidth={2}
            dot={false}
            name="Achieve"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}





// src/components/DashboardWidgets/StudentsGoalChart.jsx
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// const StudentsGoalChart = ({ data }) => {
//   return (
//     <div className="w-full h-64">
//       <h4 className="text-gray-500 text-sm">Students Goal Analytics</h4>
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart data={data}>
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip />
//           <Line type="monotone" dataKey="weeklyGoal" stroke="#8884d8" strokeWidth={2} name="Weekly Goal" />
//           <Line type="monotone" dataKey="achieve" stroke="#82ca9d" strokeWidth={2} name="Achieve" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default StudentsGoalChart;

// import { LineChart } from "@mui/x-charts/LineChart";

// const margin = { right: 24 };

// export default function StudentsGoalChart() {

//   const goalAnalyticsData = [
//     { date: "Feb 02", weeklyGoal: 1, achieve: 2 },
//     { date: "Feb 09", weeklyGoal: 3, achieve: 2 },
//     { date: "Feb 16", weeklyGoal: 5, achieve: 4 },
//     { date: "Feb 23", weeklyGoal: 3, achieve: 4 },
//     { date: "Feb 30", weeklyGoal: 4, achieve: 3 },
//     { date: "Mar 06", weeklyGoal: 1, achieve: 2 },
//     { date: "Mar 13", weeklyGoal: 0, achieve: 1 },
//   ];

//   const pData = goalAnalyticsData.map((item) => item.weeklyGoal);
//   const uData = goalAnalyticsData.map((item) => item.achieve);
//   const xLabels = goalAnalyticsData.map((item) => item.date);
//   return (
//     <div>
//       <h4 className="text-lg">Students Goal Analytics</h4>
//       <LineChart
//         height={300}
//         series={[
//           { data: pData, label: "weeklyGoal", color: "#332434" },
//           { data: uData, label: "achieve", color: "#0000FF" },
//         ]}
//         xAxis={[{ scaleType: "point", data: xLabels }]}
//         yAxis={[{ width: 50 }]}
//         margin={margin}
//       />
//     </div>
//   );
// }


