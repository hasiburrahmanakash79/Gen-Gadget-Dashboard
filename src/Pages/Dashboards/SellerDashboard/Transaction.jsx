import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TransactionAverageCard from "../../../components/SellerDashboardWidgets/Transection/TransectionAverageCard";
import PaymentCard from "../../../components/SellerDashboardWidgets/Transection/PaymentCard";
import TransactionTable from "../../../components/SellerDashboardWidgets/Transection/TransectionTable";

const Transaction = () => {
  return (
    <div className="p-10">
      <SectionTitle title="Transaction" />
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <TransactionAverageCard />
        </div>
        <div>
          <PaymentCard />
        </div>
      </div>
      <TransactionTable />
    </div>
  );
};

export default Transaction;
