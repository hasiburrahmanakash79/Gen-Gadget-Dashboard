import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import DashboardCard from "../../../components/SellerDashboardWidgets/DashboardCard/DashboardCard";
// import InsightCard from "../../../components/SellerDashboardWidgets/WeeklyReportChart/InsightCard";
import TrafficMonitoringCard from "../../../components/SellerDashboardWidgets/WeeklyReportChart/TrafficMonitoringCard";
import WeeklyReportChart from "../../../components/SellerDashboardWidgets/WeeklyReportChart/WeeklyReportChart";

const SellerOverview = () => {
  return (
    <div className="p-10">
      <SectionTitle title="Seller Overview" />
      <DashboardCard />
      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="col-span-2">
          <WeeklyReportChart />
        </div>
        <div>
          {/* <InsightCard/> */}
          <TrafficMonitoringCard />
        </div>
      </div>
    </div>
  );
};

export default SellerOverview;
