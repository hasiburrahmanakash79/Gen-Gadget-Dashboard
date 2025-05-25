import TestCard from "../../../components/StudentDashboardWidgets/TestCenter/TestCard";
import TestGoalTracker from "../../../components/StudentDashboardWidgets/TestCenter/TestGoalTracker";
import TestCenterHistory from "../../../components/StudentDashboardWidgets/TestCenter/TestCenterHistory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const TestCenter = () => {
  return (
    <div className="p-5">
      <SectionTitle
      title={"Test Center"}
      subTitle={
        "Here’s your personalized dashboard to manage users, track progress, and oversee platform performance."
      }
      ></SectionTitle>
      <div>
        <TestCard />
      </div>
      <div>
        <TestGoalTracker />
      </div>
      <div>
        <TestCenterHistory />
      </div>
    </div>
  );
};

export default TestCenter;
