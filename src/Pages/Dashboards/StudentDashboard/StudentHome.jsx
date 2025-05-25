import Progress from "../../../components/StudentDashboardWidgets/ProgressAndGoal/Progress";
import TestProgress from "../../../components/StudentDashboardWidgets/ProgressAndGoal/TestProgress";
import Achievements from "../../../components/StudentDashboardWidgets/ProgressAndGoal/Achievements";
import StudentProgressChart from "../../../components/StudentDashboardWidgets/ProgressAndGoal/StudentProgressChart";
import AiSuggestions from "../../../components/StudentDashboardWidgets/ProgressAndGoal/AiSuggestions";
import Performance from "../../../components/StudentDashboardWidgets/ProgressAndGoal/Performance";
import { RiLightbulbFlashLine } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const StudentHome = () => {
  return (
    <div className="p-5">
      <SectionTitle
      title={"Welcome Back"}
      subTitle={
        "Here’s your personalized dashboard to manage users, track progress, and oversee platform performance."
      }>
      </SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Progress />
        <TestProgress />
        <div className="border border-base-300 p-4 rounded-2xl">
          <Achievements />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="md:col-span-2">
          <StudentProgressChart />
        </div>
        <div className="border border-base-300 p-4 rounded-2xl">
          <div className="flex items-center gap-2 mb-1">
            <RiLightbulbFlashLine className="text-2xl" />
            <h2 className="text-lg font-semibold text-gray-800">
              AI Suggestions
            </h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Personalized recommendations
          </p>
          <AiSuggestions />
        </div>
      </div>
      <div>
        <Performance />
      </div>
    </div>
  );
};

export default StudentHome;
