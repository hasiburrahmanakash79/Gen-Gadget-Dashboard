import { RiAddCircleLine } from "react-icons/ri";
import card from "../../../assets/images/card_image.png";

const PaymentCard = () => {
  return (
    <div className="p-5 bg-white shadow-sm border border-gray-100 rounded-xl w-full">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Payment</h2>
        </div>
        <button className="text-gray-700">
          <span className="text-lg font-semibold">⋮</span>
        </button>
      </div>
      <div className="grid grid-cols-2 my-7 gap-5">
        <div>
          <img src={card} alt="" />
        </div>
        <div className="space-y-4 mt-3">
            <p>Status: <span className="text-green-500">Active</span></p>
            <p>Transactions: <span className="font-semibold">$1222</span></p>
            <p>Revenue: <span className="font-semibold">$50,000</span></p>
            <a href="#" className="text-purple-500 underline">View Transactions</a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <button className="text-gray-700 border border-gray-300 bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2"><RiAddCircleLine />Add Card</button>
        <div className="w-full flex justify-end">
            <button className="text-red-500 border border-red-500 bg-red-50 px-3 py-2 rounded-lg hover:bg-red-100 w-1/2">Deactivate</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
