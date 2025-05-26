import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const sortedData = [
  {
    image:
      "https://udaipurkiran.com/wp-content/uploads/2024/04/iPhone-16-Pro.webp",
    productName: "iphone 16 pro max",
    productCode: "PRD001",
    price: 1059.99,
  },
  {
    image: "https://images.unsplash.com/photo-1606813902917-0e6226ad9c93",
    productName: "Smartwatch Series 5",
    productCode: "PRD002",
    price: 129.99,
  },
  {
    image: "https://images.unsplash.com/photo-1606813902917-0e6226ad9c93",
    productName: "Bluetooth Speaker",
    productCode: "PRD003",
    price: 39.49,
  },
  {
    image: "https://images.unsplash.com/photo-1555617117-08a2b422c7aa",
    productName: "DSLR Camera",
    productCode: "PRD004",
    price: 449.0,
  },
  {
    image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    productName: "Gaming Mouse",
    productCode: "PRD005",
    price: 25.75,
  },
  {
    image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    productName: "Gaming Mouse",
    productCode: "PRD005",
    price: 25.75,
  },
];

const TopProducts = () => {
  return (
    <div className="p-5 border border-gray-100 rounded-2xl shadow">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Top Products</h1>
        <Link to="/" className="text-indigo-600 underline">
          All Products
        </Link>
      </div>
      <div>
        <div className="relative py-5">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 ps-4 bg-gray-100 rounded-full text-sm focus:outline-none"
          />
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
            <RiSearchLine className="text-lg" />
          </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <tbody>
            {sortedData.map((product, idx) => (
              <tr key={idx} className="border-b border-gray-200 ">
                <td>
                  <div className="w-16 rounded">
                    <img src={product.image} alt="" className="rounded" />
                  </div>
                </td>
                <td className="py-3.5">
                  <p className="font-bold">{product.productName}</p>
                  <p className="text-xs">{product.productCode}</p>
                </td>

                <td>${product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;
