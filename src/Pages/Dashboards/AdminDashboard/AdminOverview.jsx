import CategoriesOverview from "../../../components/AdminDashboardWidgets/CategoriesOverview";
import TopSeller from "../../../components/AdminDashboardWidgets/TopSeller";
import UserDataCard from "../../../components/AdminDashboardWidgets/UserDataCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TransectionOverview from "../../../components/SellerDashboardWidgets/TransectionAndTopProducts/TransectionOverview";
import WeeklyReportChart from "../../../components/SellerDashboardWidgets/WeeklyReportChart/WeeklyReportChart";

const AdminOverview = () => {
  return (
    <div className="p-10">
      <SectionTitle title="Admin Overview" />
      <div>
        <UserDataCard />
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="col-span-2">
            <WeeklyReportChart/>
        </div>
        <div>
           <CategoriesOverview/>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="col-span-2">
            <TransectionOverview/>
        </div>
        <div>
            <TopSeller/>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
