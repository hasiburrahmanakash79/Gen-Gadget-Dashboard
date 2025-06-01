import { useState } from "react";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiSearchLine,
  RiArrowUpDownLine,
} from "react-icons/ri";


const couponData = [
  {
    id: 1,
    title: "10% Off",
    code: "COUPON10",
    date: "2023-10-01",
    discount: 10,
    description: "Get 10% off on your next purchase.",
  },
  {
    id: 2,
    title: "20% Off",
    code: "SAVE20",
    date: "2023-11-15",
    discount: 20,
    description: "Save 20% on selected items only.",
  },
  {
    id: 3,
    title: "Free Shipping",
    code: "FREESHIP",
    date: "2023-12-01",
    discount: 0,
    description: "Enjoy free shipping on orders over $50.",
  },
  {
    id: 4,
    title: "30% Off Winter Sale",
    code: "WINTER30",
    date: "2024-01-05",
    discount: 30,
    description: "30% discount on winter collection.",
  },
  {
    id: 5,
    title: "15% Off",
    code: "TAKE15",
    date: "2024-02-10",
    discount: 15,
    description: "Take 15% off your order sitewide.",
  },
  {
    id: 6,
    title: "5% Off First Order",
    code: "WELCOME5",
    date: "2024-03-01",
    discount: 5,
    description: "New customers get 5% off their first order.",
  },
  {
    id: 7,
    title: "Buy 1 Get 1 Free",
    code: "BOGO",
    date: "2024-04-20",
    discount: 50,
    description: "Buy one item and get another one free.",
  },
  {
    id: 8,
    title: "25% Off",
    code: "FLASH25",
    date: "2024-05-10",
    discount: 25,
    description: "Flash sale! 25% off for 24 hours only.",
  },
  {
    id: 9,
    title: "Exclusive 18% Off",
    code: "EXTRA18",
    date: "2024-06-01",
    discount: 18,
    description: "18% discount exclusively for email subscribers.",
  },
  {
    id: 10,
    title: "40% Off Clearance",
    code: "CLEAR40",
    date: "2024-07-15",
    discount: 40,
    description: "Clearance sale: 40% off all clearance items.",
  },
];


export default function CouponTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter by name or phone search
  const filteredCoupon = couponData
    .filter(
      (coupon) =>
        coupon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coupon.code.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return sortAsc ? -1 : 1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return sortAsc ? 1 : -1;
      return 0;
    });

  const totalPages = Math.ceil(filteredCoupon.length / itemsPerPage);
  const paginatedCoupon = filteredCoupon.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 border border-gray-100 rounded-lg bg-white shadow mt-5">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Coupon List</h1>
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
              <th className="p-2">Coupon Title</th>
              <th className="p-2">Code</th>
              <th className="p-2">Valid Date</th>
              <th className="p-2">Discount</th>
              <th className="p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCoupon.map((coupon, idx) => (
              <tr
                key={coupon.id}
                className="border-b border-gray-100 text-gray-700 hover:bg-gray-50"
              >
                <td className="p-4">
                  {(currentPage - 1) * itemsPerPage + idx + 1}
                </td>
                <td className="p-2 font-medium">{coupon.title}</td>
                <td className="p-2">{coupon.code}</td>
                <td className="p-2">{coupon.date}</td>
                <td className="p-2">{coupon.discount}%</td>
                <td className="p-2">{coupon.description}</td>
                
              </tr>
            ))}
            {paginatedCoupon.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No Coupon found
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

      
    </div>
  );
}
