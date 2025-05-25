import { RiErrorWarningLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const AtRiskStudents = () => {
  const atRiskStudents = [
    {
      id: "AR101",
      name: "Ayesha",
      risk: "High",
      team: "Alpha",
      class: "10th",
      exam: 25,
      marks: 450,
    },
    {
      id: "AR102",
      name: "Bilal",
      risk: "Medium",
      team: "Beta",
      class: "9th",
      exam: 22,
      marks: 420,
    },
    {
      id: "AR103",
      name: "Catherine",
      risk: "Low",
      team: "Gamma",
      class: "8th",
      exam: 20,
      marks: 400,
    },
    {
      id: "AR104",
      name: "Danish",
      risk: "High",
      team: "Delta",
      class: "7th",
      exam: 18,
      marks: 380,
    },
    {
      id: "AR105",
      name: "Emaan",
      risk: "Medium",
      team: "Alpha",
      class: "6th",
      exam: 16,
      marks: 360,
    },
    {
      id: "AR106",
      name: "Fahad",
      risk: "High",
      team: "Beta",
      class: "10th",
      exam: 24,
      marks: 440,
    },
    {
      id: "AR107",
      name: "Gul",
      risk: "Low",
      team: "Gamma",
      class: "9th",
      exam: 21,
      marks: 410,
    },
    {
      id: "AR108",
      name: "Hassan",
      risk: "Medium",
      team: "Delta",
      class: "8th",
      exam: 19,
      marks: 390,
    },
  ];

  const sortedData = [...atRiskStudents].sort((a, b) => a.marks - b.marks);
  const top5 = sortedData.slice(0, 5);

  return (
    <>
      {/* Card */}
      <div className="border border-orange-300 p-4 rounded-2xl">
        <div className="bg-orange-400 text-white text-lg font-semibold py-2 px-4 rounded-lg flex justify-between items-center gap-2">
          <h4>At-Risk Students</h4>
          <Link className="cursor-pointer" to="/at_risk_students">
            <RiErrorWarningLine />
          </Link>
        </div>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-sm">
            <thead className="text-gray-500 bg-base-300 p-2 rounded-xl">
              <tr>
                <th className="py-2">ID</th>
                <th className="py-2">Name</th>
                <th className="py-2">Risk</th>
              </tr>
            </thead>
            <tbody>
              {top5.map((student, idx) => (
                <tr key={idx} className="border-t text-center border-base-300">
                  <td className="py-4">{student.id}</td>
                  <td className="py-2">{student.name}</td>
                  <td
                    className={`py-2 ${
                      student.risk === "High"
                        ? "text-red-500"
                        : student.risk === "Medium"
                        ? "text-yellow-500"
                        : "text-green-500"
                    }`}
                  >
                    {student.risk}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AtRiskStudents;
