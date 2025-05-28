import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
const productData = [
  {
    id: "#2HY6UH8HG",
    name: "iPhone 15 Pro Max - Natural Titanium",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 1,
    totalprice: 1249.5,
    status: "instock"
  },
  {
    id: "#7PL0JU9KX",
    name: "iPhone 15 Pro Max - Blue Titanium",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 2,
    totalprice: 1299.0,
    status: "out of stock"
  },
  {
    id: "#5KD8MJ1BC",
    name: "iPhone 15 Pro Max - White Titanium",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 3,
    totalprice: 1260.5,
    status: "instock"
  },
  {
    id: "#9RU2DV3LZ",
    name: "iPhone 15 Pro Max - Black Titanium",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 4,
    totalprice: 1249.99,
    status: "out of stock"
  },
  {
    id: "#1NC5KT4SA",
    name: "iPhone 15 Pro Max - 256GB",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 5,
    totalprice: 1275.0,
    status: "instock"
  },
  {
    id: "#4AX2ZR7TL",
    name: "iPhone 15 Pro Max - 512GB",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 6,
    totalprice: 1349.0,
    status: "instock"
  },
  {
    id: "#3GE1XM9PU",
    name: "iPhone 15 Pro Max - 1TB",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 7,
    totalprice: 1499.0,
    status: "out of stock"
  },
  {
    id: "#6BH9CE2DY",
    name: "iPhone 15 Pro Max - A17 Pro Chip",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 8,
    totalprice: 1255.25,
    status: "instock"
  },
  {
    id: "#8MW5RT3QX",
    name: "iPhone 15 Pro Max - USB-C Fast Charging",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 9,
    totalprice: 1300.0,
    status: "instock"
  },
  {
    id: "#0DP3VB6NH",
    name: "iPhone 15 Pro Max - 6.7-inch Display",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 10,
    totalprice: 1279.0,
    status: "out of stock"
  },
  {
    id: "#XY91MN8JK",
    name: "iPhone 15 Pro Max - Dynamic Island",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 11,
    totalprice: 1299.0,
    status: "instock"
  },
  {
    id: "#AB56DW2QE",
    name: "iPhone 15 Pro Max - Pro Camera System",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 12,
    totalprice: 1269.5,
    status: "instock"
  },
  {
    id: "#FR78YH3KD",
    name: "iPhone 15 Pro Max - Titanium Design",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 13,
    totalprice: 1280.0,
    status: "out of stock"
  },
  {
    id: "#WU34CN5TS",
    name: "iPhone 15 Pro Max - USB-C Port",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 14,
    totalprice: 1275.75,
    status: "instock"
  },
  {
    id: "#OE73PW8VC",
    name: "iPhone 15 Pro Max - Action Button",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 15,
    totalprice: 1265.0,
    status: "out of stock"
  },
  {
    id: "#BV63LK9YE",
    name: "iPhone 15 Pro Max - All-Day Battery",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 16,
    totalprice: 1245.0,
    status: "instock"
  },
  {
    id: "#KL29QA0RU",
    name: "iPhone 15 Pro Max - Face ID Security",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 17,
    totalprice: 1295.99,
    status: "instock"
  },
  {
    id: "#UV17RE8FB",
    name: "iPhone 15 Pro Max - Recycled Materials",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 18,
    totalprice: 1269.99,
    status: "instock"
  },
  {
    id: "#GM38TL4WE",
    name: "iPhone 15 Pro Max - Eco Friendly",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 19,
    totalprice: 1250.0,
    status: "out of stock"
  },
  {
    id: "#ZX67NM1LO",
    name: "iPhone 15 Pro Max - Four Color Options",
    image: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg",
    ordernumber: 20,
    totalprice: 1249.0,
    status: "instock"
  }
];

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;



  const totalPages = Math.ceil(productData.length / itemsPerPage);
  const paginatedProducts = productData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="p-10">
      <SectionTitle title="Product List" />
      <div className="mt-6 p-5 border border-gray-100 rounded-lg shadow">
        <h1 className="text-2xl font-semibold mb-5">Product List</h1>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rounded">
            <thead className="bg-[#0781651A] text-green-800">
              <tr>
                <th className="p-2">Product</th>
                <th className="p-2">Total Order</th>
                <th className="p-2">Status</th>
                <th className="p-2 text-center">Price</th>
              </tr>
            </thead>
            <tbody>
              {paginatedProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-100 text-gray-700 hover:bg-gray-50"
                >
                  <td className="p-2 font-medium">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <span>{product.name}</span>
                    </div>
                  </td>
                  <td className="p-2">{product.ordernumber}</td>
                  <td className="p-2">{product.status}</td>
                  <td className="p-2 text-center space-x-3">
                    ${product.totalprice?.toFixed(2) || "0.00"}
                  </td>
                </tr>
              ))}
              {paginatedProducts.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-6 text-gray-500">
                    No customers found
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
    </div>
  );
};

export default ProductList;
