import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import AllOrderTable from "../../../components/SellerDashboardWidgets/OrderManageCard/AllOrderTable";
import OrderManageCard from "../../../components/SellerDashboardWidgets/OrderManageCard/OrderManageCard";


const OrderManagement = () => {
    return (
        <div className="p-10">
            <SectionTitle title="Order Management" />
            <div>
                <OrderManageCard/>
            </div>
            <div>
                <AllOrderTable/>
            </div>
            
        </div>
    );
};

export default OrderManagement;