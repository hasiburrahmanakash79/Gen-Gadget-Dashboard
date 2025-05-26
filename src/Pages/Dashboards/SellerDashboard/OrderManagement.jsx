import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import OrderManageCard from "../../../components/SellerDashboardWidgets/OrderManageCard/OrderManageCard";


const OrderManagement = () => {
    return (
        <div className="p-10">
            <SectionTitle title="Order Management" />
            <div>
                <OrderManageCard/>
            </div>
            
        </div>
    );
};

export default OrderManagement;