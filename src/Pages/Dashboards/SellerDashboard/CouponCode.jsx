import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CouponTable from "../../../components/SellerDashboardWidgets/CouponCode/CouponTable";

const CouponCode = () => {
  return (
    <div className="p-10">
      <SectionTitle title="Coupon code" />
      <CouponTable />
    </div>
  );
};

export default CouponCode;
