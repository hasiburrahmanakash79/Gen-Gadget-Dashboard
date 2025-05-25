import { useState } from "react";
import { FaUserPen } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllTeacher = () => {
  const allTeacher = [
    {
      id: "ST201",
      name: "John",
      team: "Red",
    },
    {
      id: "ST202",
      name: "Emily",
      team: "Blue",
    },
    {
      id: "ST203",
      name: "Michael",
      team: "Green",
    },
    {
      id: "ST204",
      name: "Sophia",
      team: "Yellow",
    },
    {
      id: "ST205",
      name: "Daniel",
      team: "Red",
    },
    {
      id: "ST206",
      name: "Olivia",
      team: "Blue",
    },
    {
      id: "ST207",
      name: "James",
      team: "Green",
    },
    {
      id: "ST208",
      name: "Isabella",
      team: "Yellow",
    },
    {
      id: "ST209",
      name: "Ethan",
      team: "Red",
    },
    {
      id: "ST210",
      name: "Mia",
      team: "Blue",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTeacher = allTeacher
    .filter((teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 4); // Limit to 4 items

  return (
    <div className="border border-base-300 p-4 rounded-2xl">
      <div className="md:flex justify-between items-center mb-4 border-b border-base-300 pb-2 text-gray-500">
        <div>
          <h4 className="text-gray-700 text-lg font-semibold">All Teachers</h4>
          <p className="text-gray-500">
            Students with the highest scores and progress.
          </p>
        </div>
        <input
          type="text"
          placeholder="Search by name"
          className="border border-gray-300 rounded px-2 py-1 text-sm my-3 md:my-0"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500 text-center">
              <th className="py-2">Team</th>
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredTeacher.map((teacher, idx) => (
              <tr
                key={idx}
                className="border-t border-base-300 text-gray-500 text-center"
              >
                <td className="py-4">{teacher.team}</td>
                <td className="py-4">{teacher.id}</td>
                <td>
                  <Link
                    to={`/teacher/${teacher.id}`}
                    className="hover:text-blue-600 hover:underline"
                  >
                    {teacher.name}
                  </Link>
                </td>
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
  );
};

export default AllTeacher;
