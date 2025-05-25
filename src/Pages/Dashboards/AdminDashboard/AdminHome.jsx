import AddMemberCard from "../../../components/AdminDashboardWidgets/AddMemberCard";
import AssignStatCard from "../../../components/AdminDashboardWidgets/AssignStatCard";
import AtRiskStudents from "../../../components/AdminDashboardWidgets/AtRiskStudents";
import ProgressStatCard from "../../../components/AdminDashboardWidgets/ProgressStatCard";
import StudentsGoalChart from "../../../components/AdminDashboardWidgets/StudentsGoalChart";
import TopPerformingStudents from "../../../components/AdminDashboardWidgets/TopPerformingStudents";
import {
  progressData,
  assignData,
  atRiskStudents,
  topStudents,
  goalAnalyticsData,
} from "../../../data/adminDashboardData";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AdminHome = () => {
  return (
    <div className="p-5">
      <SectionTitle
        title={"Admin Dashboard"}
        subTitle={
          "Here’s your personalized dashboard to manage users, track progress, and oversee platform performance."
        }
      ></SectionTitle>

      {/* Top Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mb-8">
        {progressData.map((item, index) => (
          <ProgressStatCard key={index} {...item} />
        ))}
        <AssignStatCard data={assignData} />
        <AddMemberCard />
      </div>

      {/* Add Member and Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 mb-8">
        <div className="lg:col-span-3 md:col-span-2 border border-base-300 p-4 rounded-2xl">
          <StudentsGoalChart data={goalAnalyticsData} />
        </div>
        <div className="">
          <AtRiskStudents data={atRiskStudents} />
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="">
        <TopPerformingStudents data={topStudents} />
      </div>
    </div>
  );
};

export default AdminHome;
