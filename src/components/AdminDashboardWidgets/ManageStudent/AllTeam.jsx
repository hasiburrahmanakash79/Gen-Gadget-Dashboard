import { RiAddFill, RiArrowDownSLine } from "react-icons/ri";
import SectionTitle from "../../SectionTitle/SectionTitle";

const AllTeam = () => {
  const allTeams = [
    {
      id: "TM101",
      name: "Team Alpha",
      lead: "James",
      members: "8/10",
    },
    {
      id: "TM102",
      name: "Team Beta",
      lead: "Isabella",
      members: "7/10",
    },
    {
      id: "TM103",
      name: "Team Gamma",
      lead: "Ethan",
      members: "10/10",
    },
    {
      id: "TM104",
      name: "Team Delta",
      lead: "Mia",
      members: "6/10",
    },
    {
      id: "TM105",
      name: "Team Omega",
      lead: "Liam",
      members: "9/10",
    },
    {
      id: "TM106",
      name: "Team Phoenix",
      lead: "Sophia",
      members: "5/10",
    },
    {
      id: "TM107",
      name: "Team Titan",
      lead: "Noah",
      members: "8/10",
    },
    {
      id: "TM108",
      name: "Team Nova",
      lead: "Emma",
      members: "10/10",
    },
    {
      id: "TM109",
      name: "Team Quantum",
      lead: "Ava",
      members: "7/10",
    },
    {
      id: "TM110",
      name: "Team Zenith",
      lead: "Oliver",
      members: "6/10",
    },
  ];

  return (
    <div className="p-5">
      <SectionTitle
        title={"All Team"}
        subTitle={
          "Here’s your personalized dashboard to manage users, track progress, and oversee platform performance."
        }
      ></SectionTitle>
      <div className="border border-base-300 p-4 rounded-2xl h-full">
        <div className="border-b border-base-300 pb-3 text-gray-500 flex items-center justify-between">
          <h4 className="">All Team</h4>
          <p>See All</p>
        </div>
        <div className="mt-4">
          <div className="overflow-x-auto">
            <div className="overflow-y-auto">
              {/* adjust max-h-[400px] as per your need */}
              <table className="w-full text-sm">
                <thead className="sticky bg-base-100 top-0 z-10 border-b border-base-300">
                  <tr className="text-gray-500 text-center">
                    <th className="py-2">Team ID</th>
                    <th className="py-2">Name</th>
                    <th className="py-2">Team Leader</th>
                    <th className="py-2">Members</th>
                    <th className="py-2">Add Member</th>
                    <th className="py-2"></th>
                  </tr>
                </thead>
                
                <tbody>
                  {allTeams.map((student, idx) => (
                    <tr key={idx} className="text-gray-500 text-center border-b border-base-300 rounded-2xl">
                      <td className="py-4">{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.lead}</td>
                      <td>{student.members}</td>
                      <td className="flex justify-center items-center py-4">
                        <button className="border border-base-300 rounded p-1 w-8 h-8 flex items-center justify-center">
                          <RiAddFill className="text-xl" />
                        </button>
                      </td>
                      <td>
                        <RiArrowDownSLine />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTeam;
