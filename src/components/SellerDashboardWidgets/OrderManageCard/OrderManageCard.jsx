import { RiAddCircleLine } from "react-icons/ri";
import OrderData from "./OrderData";

const OrderManageCard = () => {
  return (
    <div>
        <div className="flex justify-between items-center mb-5"> 
            <h1 className="text-2xl font-bold">
                Order List
            </h1>
            <div>
                <button className="bg-[#006850] p-2 text-white rounded flex items-center gap-1"> <RiAddCircleLine />Add Order</button>
            </div>
        </div>
      <div className="grid grid-cols-4 gap-5">
        {/*  Total Orders Card */}
        <OrderData
          title="Total Orders"
          mainValue="$350K"
          mainChange="↑ 10.4%"
          mainChangeColor="text-green-600"
          prevLabel="Previous 7days"
          prevValue="($235)"
          prevColor="text-indigo-600"
          detailsLink="Details"
        />

        {/* New Orders Card */}
        <OrderData
          title="New Orders"
          mainValue="10.7K"
          mainChange="↑ 14.4%"
          mainChangeColor="text-green-600"
          prevLabel="Previous 7days"
          prevValue="(7.6k)"
          prevColor="text-indigo-600"
          detailsLink="Details"
        />
        <OrderData
          title="Completed Orders"
          mainValue="10.7K"
          mainChange="↑ 14.4%"
          mainChangeColor="text-green-600"
          prevLabel="Previous 7days"
          prevValue="(7.6k)"
          prevColor="text-indigo-600"
          detailsLink="Details"
        />
        <OrderData
          title="Canceled Orders"
          mainValue="10.7K"
          mainChange="↑ 14.4%"
          mainChangeColor="text-green-600"
          prevLabel="Previous 7days"
          prevValue="(7.6k)"
          prevColor="text-indigo-600"
          detailsLink="Details"
        />
      </div>
    </div>
  );
};

export default OrderManageCard;
