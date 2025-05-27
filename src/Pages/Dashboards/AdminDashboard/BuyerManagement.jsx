
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

const buyerData = [
  {
    id: 1,
    name: "John Doe",
    phone: "+1 234 567 890",
    orderCount: 12,
    totalSpend: 1249.5,
    status: "active",
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+1 987 654 321",
    orderCount: 7,
    totalSpend: 678.2,
    status: "VIP",
  },
  {
    id: 3,
    name: "Alice Johnson",
    phone: "+1 555 888 333",
    orderCount: 4,
    totalSpend: 320.0,
    status: "inactive",
  },
  {
    id: 4,
    name: "Bob Williams",
    phone: "+1 444 222 111",
    orderCount: 9,
    totalSpend: 950.1,
    status: "active",
  },
  {
    id: 5,
    name: "Charlie Brown",
    phone: "+1 123 456 789",
    orderCount: 15,
    totalSpend: 2300,
    status: "VIP",
  },
  {
    id: 6,
    name: "Diana Prince",
    phone: "+1 111 222 333",
    orderCount: 5,
    totalSpend: 470.75,
    status: "inactive",
  },
  {
    id: 7,
    name: "Ethan Hunt",
    phone: "+1 999 888 777",
    orderCount: 11,
    totalSpend: 1430,
    status: "active",
  },
  {
    id: 8,
    name: "Fiona Gallagher",
    phone: "+1 666 555 444",
    orderCount: 3,
    totalSpend: 215,
    status: "inactive",
  },
  {
    id: 9,
    name: "George Martin",
    phone: "+1 333 222 111",
    orderCount: 20,
    totalSpend: 3100,
    status: "VIP",
  },
  {
    id: 10,
    name: "Hannah Baker",
    phone: "+1 888 777 666",
    orderCount: 8,
    totalSpend: 810,
    status: "active",
  },
  {
    id: 11,
    name: "Irene Adler",
    phone: "+1 777 666 555",
    orderCount: 6,
    totalSpend: 500,
    status: "inactive",
  },
  {
    id: 12,
    name: "Jack Sparrow",
    phone: "+1 222 333 444",
    orderCount: 14,
    totalSpend: 2100,
    status: "VIP",
  },
  {
    id: 13,
    name: "Kelly Clarkson",
    phone: "+1 444 555 666",
    orderCount: 10,
    totalSpend: 1050,
    status: "active",
  },
  {
    id: 14,
    name: "Liam Neeson",
    phone: "+1 555 666 777",
    orderCount: 2,
    totalSpend: 140,
    status: "inactive",
  },
  {
    id: 15,
    name: "Mona Lisa",
    phone: "+1 888 999 000",
    orderCount: 17,
    totalSpend: 2750,
    status: "VIP",
  },
];

const BuyerManagement = () => {
    const [showModal, setShowModal] = useState(false);
  const [selectedBuyer, setSelectedBuyer] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter by name or phone search
  const filteredBuyer = buyerData
    .filter(
      (cust) =>
        cust.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cust.phone.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      // Sort by name
      if (a.name.toLowerCase() < b.name.toLowerCase()) return sortAsc ? -1 : 1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return sortAsc ? 1 : -1;
      return 0;
    });

  const totalPages = Math.ceil(filteredBuyer.length / itemsPerPage);
  const paginatedBuyer = filteredBuyer.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Map status to text colors
  const statusColor = {
    active: "text-green-600",
    inactive: "text-gray-500",
    VIP: "text-yellow-600 font-semibold",
  };
  return (
    <div className="p-10">
      <SectionTitle title="Buyer Management" />
      <div className="p-6 border border-gray-100 rounded-lg bg-white shadow mt-5">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Buyer List</h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              className="px-8 py-2 bg-gray-100 rounded-md text-sm outline-none"
              placeholder="Search by name or phone"
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

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rounded">
          <thead className="bg-[#0781651A] text-green-800">
            <tr>
              <th className="p-4">No.</th>
              <th className="p-2">Name</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Order Count</th>
              <th className="p-2">Total Spend</th>
              <th className="p-2">Status</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedBuyer.map((cust, idx) => (
              <tr
                key={cust.id}
                className="border-b border-gray-100 text-gray-700 hover:bg-gray-50"
              >
                <td className="p-4">
                  {(currentPage - 1) * itemsPerPage + idx + 1}
                </td>
                <td className="p-2 font-medium">{cust.name}</td>
                <td className="p-2">{cust.phone}</td>
                <td className="p-2">{cust.orderCount}</td>
                <td className="p-2">${cust.totalSpend.toFixed(2)}</td>
                <td className={`p-2 font-semibold ${statusColor[cust.status]}`}>
                  {cust.status.charAt(0).toUpperCase() + cust.status.slice(1)}
                </td>
                <td className="p-2 text-center space-x-3">
                  <button
                    title="Edit"
                    className="text-gray-500 hover:text-blue-800"
                    onClick={() => {
                      setSelectedBuyer(cust);
                      setShowModal(true);
                    }}
                  >
                    <RiProfileLine size={20} />
                  </button>
                  <button
                    title="Delete"
                    className="text-gray-500 hover:text-red-600"
                    onClick={() => alert(`Delete Buyer ${cust.name}`)}
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </td>
              </tr>
            ))}
            {paginatedBuyer.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No Buyer found
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
        {selectedBuyer && (
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.pravatar.cc/100"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h2 className="font-bold text-lg text-[#004D40]">
                  {selectedBuyer.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {selectedBuyer.name.toLowerCase().split(" ").join(".")}
                  @example.com
                </p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-600 mb-1">
                Buyer Info
              </h4>
              <div className="flex items-center gap-2 mb-2 border border-gray-200 px-3 py-2 rounded text-sm">
                <span className="">
                  <RiPhoneLine />
                </span>
                {selectedBuyer.phone}
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

export default BuyerManagement;
