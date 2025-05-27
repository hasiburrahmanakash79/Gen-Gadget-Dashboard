import { useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowUpDownLine,
  RiSearchLine,
} from "react-icons/ri";

const ordersData = [
  {
    id: 1,
    orderId: "#ORD0001",
    product: "Wireless Bluetooth Headphones",
    imageUrl: "https://example.com/images/headphones.png",
    date: "01-01-2025",
    price: 49.99,
    payment: "Paid",
    status: "Delivered",
  },
  {
    id: 2,
    orderId: "#ORD0002",
    product: "Men's T-Shirt",
    imageUrl: "https://example.com/images/tshirt.png",
    date: "02-01-2025",
    price: 14.99,
    payment: "Unpaid",
    status: "Pending",
  },
  {
    id: 3,
    orderId: "#ORD0003",
    product: "Men's Leather Wallet",
    imageUrl: "https://example.com/images/wallet.png",
    date: "03-01-2025",
    price: 49.99,
    payment: "Paid",
    status: "Delivered",
  },
  {
    id: 4,
    orderId: "#ORD0004",
    product: "Memory Foam Pillow",
    imageUrl: "https://example.com/images/pillow.png",
    date: "04-01-2025",
    price: 39.99,
    payment: "Paid",
    status: "Shipped",
  },
  {
    id: 5,
    orderId: "#ORD0005",
    product: "Adjustable Dumbbells",
    imageUrl: "https://example.com/images/dumbbells.png",
    date: "05-01-2025",
    price: 14.99,
    payment: "Unpaid",
    status: "Pending",
  },
  {
    id: 6,
    orderId: "#ORD0006",
    product: "Coffee Maker",
    imageUrl: "https://example.com/images/coffeemaker.png",
    date: "06-01-2025",
    price: 79.99,
    payment: "Unpaid",
    status: "Cancelled",
  },
  {
    id: 7,
    orderId: "#ORD0007",
    product: "Casual Baseball Cap",
    imageUrl: "https://example.com/images/baseballcap.png",
    date: "07-01-2025",
    price: 49.99,
    payment: "Paid",
    status: "Delivered",
  },
  {
    id: 8,
    orderId: "#ORD0008",
    product: "Full HD Webcam",
    imageUrl: "https://example.com/images/webcam.png",
    date: "08-01-2025",
    price: 39.99,
    payment: "Paid",
    status: "Delivered",
  },
  {
    id: 9,
    orderId: "#ORD0009",
    product: "Smart LED Color Bulb",
    imageUrl: "https://example.com/images/bulb.png",
    date: "09-01-2025",
    price: 79.99,
    payment: "Unpaid",
    status: "Delivered",
  },
  {
    id: 10,
    orderId: "#ORD0010",
    product: "Men's T-Shirt",
    imageUrl: "https://example.com/images/tshirt.png",
    date: "10-01-2025",
    price: 14.99,
    payment: "Unpaid",
    status: "Delivered",
  },
  {
    id: 11,
    orderId: "#ORD0011",
    product: "Bluetooth Speaker",
    imageUrl: "https://example.com/images/speaker.png",
    date: "11-01-2025",
    price: 29.99,
    payment: "Paid",
    status: "Delivered",
  },
  {
    id: 12,
    orderId: "#ORD0012",
    product: "Running Shoes",
    imageUrl: "https://example.com/images/shoes.png",
    date: "12-01-2025",
    price: 59.99,
    payment: "Paid",
    status: "Pending",
  },
  {
    id: 13,
    orderId: "#ORD0013",
    product: "Yoga Mat",
    imageUrl: "https://example.com/images/yogamat.png",
    date: "13-01-2025",
    price: 19.99,
    payment: "Unpaid",
    status: "Cancelled",
  },
  {
    id: 14,
    orderId: "#ORD0014",
    product: "Digital Watch",
    imageUrl: "https://example.com/images/watch.png",
    date: "14-01-2025",
    price: 89.99,
    payment: "Paid",
    status: "Shipped",
  },
  {
    id: 15,
    orderId: "#ORD0015",
    product: "Leather Belt",
    imageUrl: "https://example.com/images/belt.png",
    date: "15-01-2025",
    price: 24.99,
    payment: "Paid",
    status: "Delivered",
  },
  {
    id: 16,
    orderId: "#ORD0016",
    product: "Sunglasses",
    imageUrl: "https://example.com/images/sunglasses.png",
    date: "16-01-2025",
    price: 34.99,
    payment: "Unpaid",
    status: "Pending",
  },
  {
    id: 17,
    orderId: "#ORD0017",
    product: "Backpack",
    imageUrl: "https://example.com/images/backpack.png",
    date: "17-01-2025",
    price: 69.99,
    payment: "Paid",
    status: "Delivered",
  },
  {
    id: 18,
    orderId: "#ORD0018",
    product: "Water Bottle",
    imageUrl: "https://example.com/images/waterbottle.png",
    date: "18-01-2025",
    price: 9.99,
    payment: "Unpaid",
    status: "Cancelled",
  },
  {
    id: 19,
    orderId: "#ORD0019",
    product: "Wireless Mouse",
    imageUrl: "https://example.com/images/mouse.png",
    date: "19-01-2025",
    price: 25.99,
    payment: "Paid",
    status: "Delivered",
  },
  {
    id: 20,
    orderId: "#ORD0020",
    product: "Gaming Keyboard",
    imageUrl: "https://example.com/images/keyboard.png",
    date: "20-01-2025",
    price: 49.99,
    payment: "Paid",
    status: "Delivered",
  },
];

export default function AllOrderTable() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const filteredOrders = ordersData
    .filter((order) =>
      activeTab === "All" ? true : order.status === activeTab
    )
    .filter((order) =>
      order.product.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date.split("-").reverse().join("-"));
      const dateB = new Date(b.date.split("-").reverse().join("-"));
      return sortAsc ? dateA - dateB : dateB - dateA;
    });

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const statusIcon = {
    Delivered: <MdLocalShipping />,
    Pending: <MdLocalShipping />,
    Cancelled: <MdLocalShipping />,
    Shipped: <MdLocalShipping />,
  };

  return (
    <div className="p-6 border border-gray-100 rounded-lg bg-white shadow mt-5">
      <div className="flex items-center justify-between mb-4">
        <div className="space-x-2 bg-[#0781651A] p-2 rounded">
          {["All", "Delivered", "Shipped", "Pending", "Cancelled"].map(
            (tab) => (
              <button
                key={tab}
                className={`px-10 py-2 rounded-md text-sm font-medium ${
                  activeTab === tab
                    ? "bg-white text-green-700 shadow transform duration-300"
                    : "text-green-700"
                }`}
                onClick={() => {
                  setActiveTab(tab === "Delivered" ? "Delivered" : tab);
                  setCurrentPage(1);
                }}
              >
                {tab}
              </button>
            )
          )}
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              className="px-8 py-2 bg-gray-100 rounded-md text-sm outline-none"
              placeholder="Search order report"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <RiSearchLine className="absolute top-2.5 left-2.5 text-gray-500" />
          </div>
          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="p-2 border border-gray-200 text-gray-500 rounded-md"
          >
            <RiArrowUpDownLine />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rounded">
          <thead className="bg-[#0781651A] text-green-800">
            <tr>
              <th className="p-5"></th>
              <th className="p-4">No.</th>
              <th className="p-2">Order ID</th>
              <th className="p-2">Product</th>
              <th className="p-2">Date</th>
              <th className="p-2">Price</th>
              <th className="p-2">Payment</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order, idx) => (
              <tr key={order.id} className="border-b border-gray-100 text-gray-700">
                <td className="p-5">
                  <input
                    type="checkbox"
                    // Add logic for row selection if needed
                    onChange={() => {}}
                  />
                </td>
                <td className="p-4">
                  {(currentPage - 1) * itemsPerPage + idx + 1}
                </td>
                <td className="p-2">{order.orderId}</td>
                <td className="p-2">{order.product}</td>
                <td className="p-2">{order.date}</td>
                <td className="p-2">${order.price.toFixed(2)}</td>
                <td className="p-2">
                  <span
                    className={`text-sm ${
                      order.payment === "Paid"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {order.payment}
                  </span>
                </td>
                <td
                  className={`p-5 flex items-center gap-2 ${
                    order.status === "Delivered"
                      ? "text-green-500"
                      : order.status === "Pending"
                      ? "text-yellow-500"
                      : order.status === "Cancelled"
                      ? "text-red-500"
                      : "text-gray-700"
                  }`}
                >
                  {statusIcon[order.status]}
                  <span className="capitalize">{order.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          className="px-3 py-1 border border-gray-100 rounded-md flex items-center gap-2"
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
          className="px-3 py-1 border border-gray-100 rounded-md flex items-center gap-2"
        >
          Next <RiArrowRightLine />
        </button>
      </div>
    </div>
  );
}
