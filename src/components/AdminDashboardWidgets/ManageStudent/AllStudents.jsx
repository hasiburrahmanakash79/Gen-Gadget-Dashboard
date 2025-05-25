import { useState } from "react";
import { FaUserPen } from "react-icons/fa6";

const AllStudents = () => {
  const allStudents = [
    {
      id: "ST207",
      name: "James",
      class: "9th",
      mark: 760,
      teacher: "Mr. Anderson",
      team: "Green",
      exam: "Science",
    },
    {
      id: "ST208",
      name: "Isabella",
      class: "8th",
      mark: 740,
      teacher: "Ms. Thomas",
      team: "Yellow",
      exam: "English",
    },
    {
      id: "ST209",
      name: "Ethan",
      class: "7th",
      mark: 720,
      teacher: "Mr. Moore",
      team: "Red",
      exam: "History",
    },
    {
      id: "ST210",
      name: "Mia",
      class: "6th",
      mark: 700,
      teacher: "Ms. Martin",
      team: "Blue",
      exam: "Geography",
    },
    {
      id: "ST210",
      name: "Mia",
      class: "6th",
      mark: 700,
      teacher: "Ms. Martin",
      team: "Blue",
      exam: "Geography",
    },
    {
      id: "ST210",
      name: "Mia",
      class: "6th",
      mark: 700,
      teacher: "Ms. Martin",
      team: "Blue",
      exam: "Geography",
    },
    {
      id: "ST210",
      name: "Mia",
      class: "6th",
      mark: 700,
      teacher: "Ms. Martin",
      team: "Blue",
      exam: "Geography",
    },
    {
      id: "ST210",
      name: "Mia",
      class: "6th",
      mark: 700,
      teacher: "Ms. Martin",
      team: "Blue",
      exam: "Geography",
    },
    {
      id: "ST210",
      name: "Mia",
      class: "6th",
      mark: 700,
      teacher: "Ms. Martin",
      team: "Blue",
      exam: "Geography",
    },
    {
      id: "ST210",
      name: "Mia",
      class: "6th",
      mark: 700,
      teacher: "Ms. Martin",
      team: "Blue",
      exam: "Geography",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStudents = allStudents.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="border border-base-300 p-4 rounded-2xl h-full">
      {/* Header */}
      <div className="border-b border-base-300 pb-3 text-gray-500 flex items-center justify-between">
        <div>
          <h4 className="text-xl text-gray-600 font-semibold">All Students</h4>
          <p className="">
            Students with the highest scores and progress.
          </p>
        </div>
        <input
          type="text"
          placeholder="Search by name"
          className="border border-gray-300 rounded px-2 py-1 text-sm my-4 md:my-0"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="max-h-[300px] overflow-y-auto">
          {/* adjust max-h-[400px] as per your need */}
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-base-200 z-10">
              <tr className="text-gray-500 text-center">
                <th className="py-2">Team</th>
                <th className="py-2">ID</th>
                <th className="py-2">Name</th>
                <th className="py-2">Exam</th>
                <th className="py-2">Mark</th>
                <th className="py-2">Teacher</th>
                <th className="py-2">Edit</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, idx) => (
                <tr
                  key={idx}
                  className="border-t border-base-300 text-gray-500 text-center"
                >
                  <td className="py-4">{student.team}</td>
                  <td className="py-4">{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.exam}</td>
                  <td>{student.mark}/1200</td>
                  <td>{student.teacher}</td>
                  <td className="flex justify-center items-center mt-5">
                    <button>
                      <FaUserPen />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center text-sm text-gray-600">
        Showing {filteredStudents.length} student
        {filteredStudents.length !== 1 ? "s" : ""}
      </div>
    </div>
  );
};

export default AllStudents;
