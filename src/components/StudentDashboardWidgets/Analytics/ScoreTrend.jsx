// import { LineChart } from "@mui/x-charts/LineChart";

// const ScoreTrend = () => {

//   const studentProgress = [
//     { date: "Feb 02", score: 0 },
//     { date: "Feb 09", score: 6 },
//     { date: "Feb 16", score: 4 },
//     { date: "Feb 23", score: 9 },
//     { date: "Feb 30", score: 4 },
//     { date: "Mar 06", score: 6 },
//     { date: "Mar 13", score: 1 },
//     { date: "Mar 20", score: 7 },
//     { date: "Mar 27", score: 5 },
//     { date: "Apr 03", score: 8 },
//     { date: "Apr 10", score: 3 },
//     { date: "Apr 17", score: 6 },
//     { date: "Apr 24", score: 9 },
//     { date: "May 01", score: 2 },
//     { date: "May 08", score: 4 },
//     { date: "May 15", score: 7 },
//     { date: "May 22", score: 5 },
//     { date: "May 29", score: 8 },
//     { date: "Jun 05", score: 3 },
//     { date: "Jun 12", score: 6 },
//     { date: "Jun 19", score: 9 },
//     { date: "Jun 26", score: 2 },
//     { date: "Jul 03", score: 4 },
//     { date: "Jul 10", score: 7 },
//     { date: "Jul 17", score: 5 },
//     { date: "Jul 24", score: 8 },
//   ];

//   const Score = studentProgress.map((item) => item.score);
//   const xLabels = studentProgress.map((item) => item.date);

//   return (
//     <div className="">
//       <div className="pb-3 text-gray-500 flex items-center justify-between">
//         <h4 className="text-gray-500 font-medium">Growth Trend </h4>
//         <select
//           className="text-sm"
//         >
//           <option value="Weekly">Weekly</option>
//           <option value="Monthly">Monthly</option>
//           <option value="Yearly">Yearly</option>
//         </select>
//       </div>

//       <LineChart
//         height={300}
//         xAxis={[
//           {
//             scaleType: "point",
//             data: xLabels,
//             tickLabelStyle: {
//               fontSize: 12,
//               fill: "#999",
//             },
//           },
//         ]}
//         yAxis={[
//           {
//             tickMinStep: 1,
//             tickLabelStyle: {
//               fontSize: 12,
//               fill: "#999",
//             },
//           },
//         ]}
//         grid={{ horizontal: true, vertical: false }}
//         series={[
//           {
//             data: Score,
//             label: "Score",
//             color: "#3B82F6", // blue-500
//             curve: "monotone",
//           }
          
//         ]}
//         margin={{ top: 10, right: 20, bottom: 30, left: 40 }}
//         sx={{
//           ".MuiLineElement-root": {
//             strokeWidth: 1,
//           },
//           ".MuiMarkElement-root": {
//             display: "none",
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default ScoreTrend;



import { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const ScoreTrend = () => {
  const [selectedRange, setSelectedRange] = useState("Weekly");

  // Sample Data Sets
  const weeklyData = [
    { date: "Apr 01", score: 3 },
    { date: "Apr 08", score: 6 },
    { date: "Apr 15", score: 4 },
    { date: "Apr 22", score: 7 },
    { date: "Apr 29", score: 5 },
  ];

  const monthlyData = [
    { date: "Jan", score: 20 },
    { date: "Feb", score: 35 },
    { date: "Mar", score: 28 },
    { date: "Apr", score: 40 },
    { date: "May", score: 32 },
  ];

  const yearlyData = [
    { date: "2020", score: 180 },
    { date: "2021", score: 220 },
    { date: "2022", score: 210 },
    { date: "2023", score: 240 },
    { date: "2024", score: 250 },
  ];

  // Filter data based on selection
  const getFilteredData = () => {
    if (selectedRange === "Weekly") return weeklyData;
    if (selectedRange === "Monthly") return monthlyData;
    if (selectedRange === "Yearly") return yearlyData;
    return [];
  };

  const filteredData = getFilteredData();
  const xLabels = filteredData.map((item) => item.date);
  const scores = filteredData.map((item) => item.score);

  return (
    <div className="">
      <div className="pb-3 text-gray-600 flex items-center justify-between">
        <h4 className="font-semibold text-lg">Growth Trend</h4>
        <select
          className="text-sm px-2 py-1 rounded-md outline-none text-gray-700"
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
        >
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
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
            data: scores,
            label: "Score",
            color: "#3B82F6",
            curve: "monotone",
          },
        ]}
        margin={{ top: 10, right: 20, bottom: 30, left: 40 }}
        sx={{
          ".MuiLineElement-root": {
            strokeWidth: 2,
          },
          ".MuiMarkElement-root": {
            display: "none",
          },
        }}
      />
    </div>
  );
};

export default ScoreTrend;
