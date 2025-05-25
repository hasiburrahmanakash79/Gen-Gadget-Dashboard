import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaRegBell } from "react-icons/fa6";
import { RiMailOpenLine } from "react-icons/ri";

const AllAtRiskStudents = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
    {
      id: "AR109",
      name: "Iqra",
      risk: "High",
      team: "Alpha",
      class: "7th",
      exam: 17,
      marks: 370,
    },
    {
      id: "AR110",
      name: "Junaid",
      risk: "Low",
      team: "Beta",
      class: "6th",
      exam: 15,
      marks: 350,
    },
    {
      id: "AR111",
      name: "Kiran",
      risk: "Medium",
      team: "Gamma",
      class: "10th",
      exam: 23,
      marks: 430,
    },
    {
      id: "AR112",
      name: "Laila",
      risk: "High",
      team: "Delta",
      class: "9th",
      exam: 20,
      marks: 400,
    },
    {
      id: "AR113",
      name: "Murtaza",
      risk: "Low",
      team: "Alpha",
      class: "8th",
      exam: 18,
      marks: 380,
    },
    {
      id: "AR114",
      name: "Nida",
      risk: "Medium",
      team: "Beta",
      class: "7th",
      exam: 16,
      marks: 360,
    },
    {
      id: "AR115",
      name: "Omar",
      risk: "High",
      team: "Gamma",
      class: "6th",
      exam: 14,
      marks: 340,
    },
    {
      id: "AR116",
      name: "Pasha",
      risk: "Low",
      team: "Delta",
      class: "10th",
      exam: 22,
      marks: 420,
    },
    {
      id: "AR117",
      name: "Qasim",
      risk: "Medium",
      team: "Alpha",
      class: "9th",
      exam: 19,
      marks: 390,
    },
    {
      id: "AR118",
      name: "Rida",
      risk: "High",
      team: "Beta",
      class: "8th",
      exam: 17,
      marks: 370,
    },
    {
      id: "AR119",
      name: "Sana",
      risk: "Low",
      team: "Gamma",
      class: "7th",
      exam: 15,
      marks: 350,
    },
    {
      id: "AR120",
      name: "Tariq",
      risk: "Medium",
      team: "Delta",
      class: "6th",
      exam: 13,
      marks: 330,
    },
  ];

  const sortedData = [...atRiskStudents].sort((a, b) => a.marks - b.marks);

  const filteredData = sortedData.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="p-5">
      <SectionTitle title="All At-Risk Students"></SectionTitle>
      <div className="w-full p-4 rounded-xl border border-base-300 ">
        <div className="flex justify-between items-center mb-4">
          <dib className="text-lg font-bold text-orange-500">
            All At-Risk Students
          </dib>
          <input
            type="text"
            placeholder="Search by name..."
            className="input input-bordered w-64 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <div className="max-h-[500px] overflow-y-auto">
            <table className=" w-full text-sm border border-base-300 rounded-lg">
              <thead className="sticky -top-0.5 bg-base-100 z-10 text-gray-700">
                <tr>
                  <th className="py-2 px-2 text-left">ID</th>
                  <th className="py-2 px-2 text-left">Name</th>
                  <th className="py-2 px-2 text-left">Class</th>
                  <th className="py-2 px-2 text-left">Team</th>
                  <th className="py-2 px-2 text-left">Exam</th>
                  <th className="py-2 px-2 text-left">Marks</th>
                  <th className="py-2 px-2 text-left">Risk</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((student, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-base-300 text-gray-700"
                  >
                    <td className="py-2 px-2">{student.id}</td>
                    <td className="py-2 px-2">{student.name}</td>
                    <td className="py-2 px-2">{student.class}</td>
                    <td className="py-2 px-2">{student.team}</td>
                    <td className="py-2 px-2">{student.exam}</td>
                    <td className="py-2 px-2">{student.marks}</td>
                    <td
                      className={`py-2 px-2 font-medium ${
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
          <div className="mt-4 text-center text-sm text-gray-600">
            Showing {filteredData.length} student
            {filteredData.length !== 1 ? "s" : ""}
          </div>
        </div>
      </div>

      <div className="md:mt-10 mt-5">
        <h1 className="text-2xl font-semibold">
          Recommended Intervention Strategies
        </h1>
        <div className="my-5">
          <div className="md:flex justify-between items-center mb-5 p-4 shadow-sm rounded-2xl border border-blue-300">
            <div className="flex items-center gap-4">
              <button className="h-12 w-12 rounded-full border border-orange-500 text-orange-500 bg-orange-50 flex items-center justify-center p-3 duration-300">
                <FaRegBell className="text-2xl " />
              </button>
              <div>
                <h4 className="font-bold text-lg">Automated Reminders</h4>
                <p className="text-gray-500 text-sm mt-2">
                  Set up automated reminders for students who haven't logged in
                  for more than 7 days.
                </p>
              </div>
            </div>
            <div className="py-3">
              <button className="bg-blue-500 hover:bg-blue-600 shadow-lg text-white py-2 px-6 rounded-lg transition">
                Enable
              </button>
            </div>
          </div>
          <div className="md:flex justify-between items-center mb-5 p-4 shadow-sm rounded-2xl border border-blue-300">
            <div className="flex items-center gap-4">
              <button className="h-12 w-12 rounded-full border border-blue-500 text-blue-500 bg-blue-50 flex items-center justify-center p-3 duration-300">
                <RiMailOpenLine className="text-2xl " />
              </button>
              <div>
                <h4 className="font-bold text-lg">Parent Communication</h4>
                <p className="text-gray-500 text-sm mt-2">
                  Send weekly progress reports to parents of students with less
                  than goal completion.
                </p>
              </div>
            </div>
            <div className="py-3">
              <button className="bg-blue-500 hover:bg-blue-600 shadow-lg text-white py-2 px-6 rounded-lg transition">
                Enable
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAtRiskStudents;
