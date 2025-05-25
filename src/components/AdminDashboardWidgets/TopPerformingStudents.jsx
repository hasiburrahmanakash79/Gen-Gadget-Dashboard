import { Link } from "react-router-dom";

const TopPerformingStudents = ({ data }) => {
  const topThreeStudents = data.slice(0, 3);

  return (
    <div className="border border-base-300 p-4 rounded-2xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-7">
        <div>
          <h4 className="text-gray-700 text-lg font-semibold">
            Top Performing Students
          </h4>
          <p className="text-gray-500">
            Students with the highest scores and progress.
          </p>
        </div>
        <Link
          className="text-sm font-bold cursor-pointer text-gray-500 hover:text-blue-500"
          to="/top-performing-students"
        >
          See All
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500 text-center">
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Class</th>
              <th className="py-2">Exam</th>
              <th className="py-2">Mark</th>
              <th className="py-2">Top</th>
            </tr>
          </thead>
          <tbody>
            {topThreeStudents.map((student, idx) => (
              <tr
                key={idx}
                className="border-t border-base-300 text-gray-500 text-center"
              >
                <td className="py-4">{student.id}</td>
                <td>{student.name}</td>
                <td>{student.class}</td>
                <td>{student.exam}</td>
                <td>{student.mark}/1200</td>
                <td className="font-bold text-blue-500">{student.top}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopPerformingStudents;

// import { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// const TopPerformingStudents = ({ data }) => {
//   const [showAll, setShowAll] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);

//   const itemsPerPage = 10;
//   const totalPages = Math.ceil(data.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = showAll ? data.slice(startIndex, startIndex + itemsPerPage) : data.slice(0, 3);

//   const handleToggle = () => {
//     setShowAll(true);
//   };

//   const changePage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="border border-base-300 p-4 rounded-2xl">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-7">
//         <div>
//           <h4 className="text-gray-700 text-lg font-semibold">
//             Top Performing Students
//           </h4>
//           <p className="text-gray-500">
//             Students with the highest scores and progress.
//           </p>
//         </div>
//         {!showAll && (
//           <button
//             className="text-sm font-bold cursor-pointer text-gray-500 hover:text-blue-500"
//             onClick={handleToggle}
//           >
//             See All
//           </button>
//         )}

//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="text-gray-500 text-center">
//               <th className="py-2">ID</th>
//               <th className="py-2">Name</th>
//               <th className="py-2">Class</th>
//               <th className="py-2">Exam</th>
//               <th className="py-2">Mark</th>
//               <th className="py-2">Top</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((student, idx) => (
//               <tr key={idx} className="border-t border-base-300 text-gray-500 text-center">
//                 <td className="py-4">{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.class}</td>
//                 <td>{student.exam}</td>
//                 <td>{student.mark}/1200</td>
//                 <td className="font-bold text-blue-500">
//                   {student.top}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       {showAll && (
//         <div className="mt-4 flex justify-center items-center space-x-2">
//           <button
//             onClick={() => changePage(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="w-8 h-8 flex items-center justify-center border rounded-md bg-white text-gray-600 disabled:opacity-50"
//           >
//             <FaChevronLeft />
//           </button>

//           {Array.from({ length: totalPages }).map((_, i) => (
//             <button
//               key={i}
//               onClick={() => changePage(i + 1)}
//               className={`w-8 h-8 rounded-md text-sm border ${
//                 currentPage === i + 1
//                   ? "bg-blue-500 text-white"
//                   : "bg-white text-gray-700"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}

//           <button
//             onClick={() => changePage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="w-8 h-8 flex items-center justify-center border rounded-md bg-white text-gray-600 disabled:opacity-50"
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TopPerformingStudents;
