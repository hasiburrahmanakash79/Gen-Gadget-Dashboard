import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiSearchLine,
  RiDeleteBin6Line,
  RiArrowUpDownLine,
  RiProfileLine,
  RiPhoneLine,
  RiMapPinLine,
} from "react-icons/ri";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import CommonModal from "../../../components/UI/CommonModal";

const users = [
  { id: 1, userName: "John Doe", email: "john.doe@example.com", role: "Admin", affectedItem: "Electronics" },
  { id: 2, userName: "Alice Smith", email: "alice.smith@example.com", role: "Admin", affectedItem: "Clothes" },
  { id: 3, userName: "Michael Johnson", email: "michael.johnson@example.com", role: "Seller", affectedItem: "Electronics" },
  { id: 4, userName: "Emily Davis", email: "emily.davis@example.com", role: "Admin", affectedItem: "Clothes" },
  { id: 5, userName: "Daniel Lee", email: "daniel.lee@example.com", role: "Buyer", affectedItem: "Electronics" },
  { id: 6, userName: "Sophia Martinez", email: "sophia.martinez@example.com", role: "Seller", affectedItem: "Clothes" },
  { id: 7, userName: "James Wilson", email: "james.wilson@example.com", role: "Admin", affectedItem: "Electronics" },
  { id: 8, userName: "Olivia Anderson", email: "olivia.anderson@example.com", role: "Buyer", affectedItem: "Clothes" },
  { id: 9, userName: "David Thomas", email: "david.thomas@example.com", role: "Seller", affectedItem: "Electronics" },
  { id: 10, userName: "Ava Taylor", email: "ava.taylor@example.com", role: "Admin", affectedItem: "Clothes" },
  { id: 11, userName: "Matthew Moore", email: "matthew.moore@example.com", role: "Buyer", affectedItem: "Electronics" },
  { id: 12, userName: "Isabella Jackson", email: "isabella.jackson@example.com", role: "Seller", affectedItem: "Clothes" },
  { id: 13, userName: "Joseph White", email: "joseph.white@example.com", role: "Admin", affectedItem: "Electronics" },
  { id: 14, userName: "Mia Harris", email: "mia.harris@example.com", role: "Buyer", affectedItem: "Clothes" },
  { id: 15, userName: "Benjamin Martin", email: "benjamin.martin@example.com", role: "Seller", affectedItem: "Electronics" },
  { id: 16, userName: "Charlotte Thompson", email: "charlotte.thompson@example.com", role: "Admin", affectedItem: "Clothes" },
  { id: 17, userName: "Elijah Garcia", email: "elijah.garcia@example.com", role: "Buyer", affectedItem: "Electronics" },
  { id: 18, userName: "Amelia Martinez", email: "amelia.martinez@example.com", role: "Seller", affectedItem: "Clothes" },
  { id: 19, userName: "Logan Robinson", email: "logan.robinson@example.com", role: "Admin", affectedItem: "Electronics" },
  { id: 20, userName: "Harper Clark", email: "harper.clark@example.com", role: "Buyer", affectedItem: "Clothes" }
];


const Activity = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter by name or phone search
  const filteredUser = users
    .filter(
      (user) =>
        user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      // Sort by name
      if (a.userName.toLowerCase() < b.userName.toLowerCase()) return sortAsc ? -1 : 1;
      if (a.email.toLowerCase() > b.email.toLowerCase()) return sortAsc ? 1 : -1;
      return 0;
    });

  const totalPages = Math.ceil(filteredUser.length / itemsPerPage);
  const paginatedUser = filteredUser.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  return (
    <div className="p-10">
      <SectionTitle title="Activity Log" />
      <div className="p-6 border border-gray-100 rounded-lg bg-white shadow mt-5">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold"></h1>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                className="px-8 py-2 bg-gray-100 rounded-md text-sm outline-none"
                placeholder="Search by name..."
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                value={searchTerm}
              />
              <RiSearchLine className="absolute top-2.5 left-2.5 text-gray-500" />
            </div>
            <button
              onClick={() => setSortAsc(!sortAsc)}
              className="p-2 border border-gray-200 text-gray-500 rounded-md"
              title="Toggle Name Sort Order"
            >
              <RiArrowUpDownLine />
            </button>
          </div>
        </div>
{/* userName: "John Doe", email: "john.doe@example.com", role: "admin", affectedItem: "electronics" */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rounded">
            <thead className="bg-[#0781651A] text-green-800">
              <tr>
                <th className="p-4">No.</th>
                <th className="p-2">USer Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Role</th>
                <th className="p-2">Affected Item</th>
                <th className="p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUser.map((user, idx) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-100 text-gray-700 hover:bg-gray-50"
                >
                  <td className="p-4">
                    {(currentPage - 1) * itemsPerPage + idx + 1}
                  </td>
                  <td className="p-2 font-medium">{user.userName}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.role}</td>
                  <td className="p-2 ">{user.affectedItem}</td>
                  
                  <td className="p-2 text-center space-x-3">
                    <button
                      title="Edit"
                      className="text-gray-500 hover:text-blue-800"
                      onClick={() => {
                        setSelectedUser(user);
                        setShowModal(true);
                      }}
                    >
                      <RiProfileLine size={20} />
                    </button>
                    <button
                      title="Delete"
                      className="text-gray-500 hover:text-red-600"
                      onClick={() => alert(`Delete User ${user.name}`)}
                    >
                      <RiDeleteBin6Line size={20} />
                    </button>
                  </td>
                </tr>
              ))}
              {paginatedUser.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-6 text-gray-500">
                    No User found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-gray-100 rounded-md flex items-center gap-2 disabled:cursor-not-allowed disabled:text-gray-400"
          >
            <RiArrowLeftLine />
            Previous
          </button>
          <div className="space-x-2">
            {[...Array(totalPages).keys()].map((i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md text-green-500 font-semibold ${
                  currentPage === i + 1
                    ? "bg-[#07816533]"
                    : "border border-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-gray-100 rounded-md flex items-center gap-2 disabled:cursor-not-allowed disabled:text-gray-400"
          >
            Next <RiArrowRightLine />
          </button>
        </div>

        <CommonModal isOpen={showModal} onClose={() => setShowModal(false)}>
          {selectedUser && (
            <div className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://i.pravatar.cc/100"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-bold text-lg text-[#004D40]">
                    {selectedUser.userName}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {selectedUser.email}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-600 mb-1">
                  Info
                </h4>
                <div className="flex items-center gap-2 mb-2 border border-gray-200 px-3 py-2 rounded text-sm">
                  <span className="">
                    <RiPhoneLine />
                  </span>
                  +3974853457
                  {/* {selectedUser.phone} */}
                </div>
                <div className="flex items-center gap-2 border border-gray-200 px-3 py-2 rounded text-sm">
                  <RiMapPinLine />
                  <span>123 Main St, NY</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-600 mb-1">
                  Social Media
                </h4>
                <div className="flex gap-3 text-xl text-gray-600">
                  <a
                    href="https://facebook.com/exampleuser"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-blue-600" />
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="text-green-600" />
                  </a>
                  <a
                    href="https://twitter.com/exampleuser"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-sky-500" />
                  </a>
                  <a
                    href="https://linkedin.com/in/exampleuser"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-blue-700" />
                  </a>
                  <a
                    href="https://instagram.com/exampleuser"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-pink-500" />
                  </a>
                </div>
              </div>

              <div className="mb-4 text-sm text-gray-600">
                <h4 className="font-semibold mb-1">Activity</h4>
                <p>Registration: 15.01.2025</p>
                <p>Last purchase: 10.01.2025</p>
              </div>

              <div className="text-sm">
                <h4 className="font-semibold text-gray-600 mb-1">
                  Order overview
                </h4>
                <div className="flex justify-between gap-5 mt-2">
                  <div className="text-center bg-[#E3F2FD] p-2 rounded w-1/3">
                    <p className="text-xl font-bold text-blue-700">150</p>
                    <p className="text-xs text-blue-600">Total order</p>
                  </div>
                  <div className="text-center bg-[#E8F5E9] p-2 rounded w-1/3">
                    <p className="text-xl font-bold text-green-700">140</p>
                    <p className="text-xs text-green-600">Completed</p>
                  </div>
                  <div className="text-center bg-[#FFEBEE] p-2 rounded w-1/3">
                    <p className="text-xl font-bold text-red-600">10</p>
                    <p className="text-xs text-red-500">Canceled</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CommonModal>
      </div>
    </div>
  );
};

export default Activity;
