import { RiAddCircleLine } from "react-icons/ri";

const sortedData = [
  {
    image:
      "https://udaipurkiran.com/wp-content/uploads/2024/04/iPhone-16-Pro.webp",
    productName: "iphone 16 pro max",
    productCode: "PRD001",
    price: 1059.99,
  },
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

const AddNewProduct = () => {
  return (
    <div className="p-5 border border-gray-100 rounded-2xl shadow">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Add New Product</h1>
        <button className="text-indigo-600 underline">Add new</button>
      </div>
      <p className="text-gray-500 text-xs">Categories</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <tbody>
            {sortedData.map((product, idx) => (
              <tr key={idx} className="border-b border-gray-200 ">
                <td>
                  <div className="w-14 rounded">
                    <img src={product.image} alt="" className="rounded" />
                  </div>
                </td>
                <td className="py-3.5">
                  <p className="font-bold">{product.productName}</p>
                  <p className="text-xs text-[#006850] font-bold">
                    ${product.price}
                  </p>
                </td>

                <td className="py-3.5">
                  <div className="flex justify-end">
                    <button className="bg-[#006850] py-1 px-2 text-white rounded-full flex items-center gap-1">
                      <RiAddCircleLine />
                      Add
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddNewProduct;
