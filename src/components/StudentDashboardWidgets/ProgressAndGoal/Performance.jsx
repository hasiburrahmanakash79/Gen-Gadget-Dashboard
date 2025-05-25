import { Link } from "react-router-dom";

const Performance = () => {
  const topStudents = [
    { id: "SD101", subject: "Math", date: "2023-01-15", mark: 980 },
    { id: "SD102", subject: "Science", date: "2023-01-16", mark: 920 },
    { id: "SD103", subject: "English", date: "2023-01-17", mark: 890 },
    { id: "SD104", subject: "History", date: "2023-01-18", mark: 850 },
    { id: "SD105", subject: "Geography", date: "2023-01-19", mark: 820 },
    { id: "SD106", subject: "Physics", date: "2023-01-20", mark: 800 },
    { id: "SD107", subject: "Chemistry", date: "2023-01-21", mark: 780 },
    { id: "SD108", subject: "Biology", date: "2023-01-22", mark: 760 },
    { id: "SD109", subject: "Math", date: "2023-01-23", mark: 740 },
    { id: "SD110", subject: "Science", date: "2023-01-24", mark: 720 },
    { id: "SD111", subject: "Math", date: "2023-01-25", mark: 700 },
    { id: "SD112", subject: "Science", date: "2023-01-26", mark: 680 },
    { id: "SD113", subject: "English", date: "2023-01-27", mark: 660 },
    { id: "SD114", subject: "History", date: "2023-01-28", mark: 640 },
    { id: "SD115", subject: "Geography", date: "2023-01-29", mark: 620 },
    { id: "SD116", subject: "Physics", date: "2023-01-30", mark: 600 },
    { id: "SD117", subject: "Chemistry", date: "2023-01-31", mark: 580 },
    { id: "SD118", subject: "Biology", date: "2023-02-01", mark: 560 },
    { id: "SD119", subject: "Math", date: "2023-02-02", mark: 540 },
    { id: "SD120", subject: "Science", date: "2023-02-03", mark: 520 },
  ];

  
  const currentItems = topStudents.slice(0, 5);


  return (
    <div className="border border-base-300 p-6 rounded-2xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-7">
        <div>
          <h4 className="text-gray-700 text-lg font-semibold">
            Exam Performance
          </h4>
          <p className="text-gray-500">
            Students with the highest scores and progress.
          </p>
        </div>
        <Link
          className="text-sm font-bold cursor-pointer text-gray-500 hover:text-blue-500"
          to="/exam_performance"
        >
          See All
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500">
              <th className="py-2 text-left">ID</th>
              <th className="py-2 text-left">Subject</th>
              <th className="py-2 text-left">Date</th>
              <th className="py-2 text-left">Mark</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((student, idx) => (
              <tr key={idx} className="border-t border-base-300 text-gray-500">
                <td className="py-4">{student.id}</td>
                <td>{student.subject}</td>
                <td>{student.date}</td>
                <td>{student.mark}/1200</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Performance;
