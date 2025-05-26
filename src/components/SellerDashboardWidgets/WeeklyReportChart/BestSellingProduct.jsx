import { useState } from "react";

const bestSelling = [
  {
    image: "https://images.unsplash.com/photo-1606813902917-0e6226ad9c93",
    productName: "Smartwatch Series 5",
    productCode: "PRD1001",
    totalOrders: 320,
    status: "In Stock",
    price: 129.99,
  },
  {
    image: "https://images.unsplash.com/photo-1585238342029-3c84b0b2a4d2",
    productName: "Wireless Headphones",
    productCode: "PRD1002",
    totalOrders: 275,
    status: "Out of Stock",
    price: 59.99,
  },
  {
    image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    productName: "Gaming Mouse",
    productCode: "PRD1003",
    totalOrders: 450,
    status: "In Stock",
    price: 25.75,
  },
  {
    image: "https://images.unsplash.com/photo-1555617117-08a2b422c7aa",
    productName: "DSLR Camera",
    productCode: "PRD1004",
    totalOrders: 190,
    status: "In Stock",
    price: 449.0,
  },
  {
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    productName: "Laptop Backpack",
    productCode: "PRD1005",
    totalOrders: 370,
    status: "In Stock",
    price: 39.95,
  },
];

const BestSellingProduct = () => {
  const [filter, setFilter] = useState("default");

  const sortedData = [...bestSelling].sort((a, b) => {
    if (filter === "lowToHigh") return a.totalOrders - b.totalOrders;
    if (filter === "highToLow") return b.totalOrders - a.totalOrders;
    return 0;
  });

  return (
    <div className="border border-gray-100 shadow rounded-2xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Best Selling Products</h1>
        <div className="flex items-center gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-[#006850] rounded py-1 px-2 text-white text-xs"
          >
            <option value="default">Filter</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-green-50">
            <tr>
              <th className="px-3">Product</th>
              <th className="py-4.5">Total Order</th>
              <th className="">Status</th>
              <th className="">Price</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((product, idx) => (
              <tr key={idx}>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14">
                      <img src={product.image} alt="" />
                    </div>
                    <div>
                        <p className="font-semibold">{product.productName}</p>
                        <p className="text-xs text-gray-600">{product.productCode}</p>
                    </div>
                  </div>
                </td>
                <td>{product.totalOrders}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        product.status === "In Stock"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    ></div>
                    <span>{product.status}</span>
                  </div>
                </td>
                <td>${product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-end items-center">
        <button className="border border-indigo-400 text-indigo-600 px-4 py-1 text-sm rounded-full hover:bg-indigo-50 transition">
          Details
        </button>
      </div>
    </div>
  );
};

export default BestSellingProduct;
