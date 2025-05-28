import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const TopSellerData = [
  {
    id: "#JHG23874UUD",
    userName: "John Doe",
    email: "john.doe@example.com",
    image: "https://i.pravatar.cc/48?u=johndoe",
  },
  {
    id: "#JHG98374TTR",
    userName: "Alice Smith",
    email: "alice.smith@example.com",
    image: "https://i.pravatar.cc/48?u=alicesmith",
  },
  {
    id: "#JHG12847UIO",
    userName: "Michael Brown",
    email: "michael.brown@example.com",
    image: "https://i.pravatar.cc/48?u=michaelbrown",
  },
  {
    id: "#JHG23844POI",
    userName: "Emma Johnson",
    email: "emma.johnson@example.com",
    image: "https://i.pravatar.cc/48?u=emmajohnson",
  },
  {
    id: "#JHG44879ASD",
    userName: "David Lee",
    email: "david.lee@example.com",
    image: "https://i.pravatar.cc/48?u=davidlee",
  },
  {
    id: "#JHG98374QWE",
    userName: "Sophia Davis",
    email: "sophia.davis@example.com",
    image: "https://i.pravatar.cc/48?u=sophiadavis",
  },
];

const TopSeller = () => {
  const [search, setSearch] = useState("");

  const filteredSellers = TopSellerData.filter(
    (seller) =>
      seller.userName.toLowerCase().includes(search.toLowerCase()) ||
      seller.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-3 border border-gray-100 rounded-lg shadow">
      <p className="text-xl font-semibold mb-2">Top Seller</p>
      <div className="relative mb-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search seller..."
          className="w-full pl-10 pr-3 py-1 bg-gray-100 rounded-full focus:outline-none"
        />
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
      {filteredSellers.map((seller) => (
        <div
          key={seller.id}
          className="border border-gray-200 p-2 mb-1 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-center gap-3">
            <img
              src={seller.image}
              alt={seller.userName}
              className="w-12 h-12 object-cover rounded border border-gray-200"
            />
            <div>
              <h3 className="font-semibold">{seller.userName}</h3>
              <p className="text-sm text-gray-600">{seller.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopSeller;
