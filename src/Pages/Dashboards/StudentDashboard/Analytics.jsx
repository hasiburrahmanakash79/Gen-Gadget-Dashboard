import ScoreTrend from "../../../components/StudentDashboardWidgets/Analytics/ScoreTrend";
import GrowthTrend from "../../../components/StudentDashboardWidgets/Analytics/GrowthTrend";
import SubjectGrowth from "../../../components/StudentDashboardWidgets/Analytics/SubjectGrowth";
import Achievements from "../../../components/StudentDashboardWidgets/ProgressAndGoal/Achievements";
import { RiLightbulbFlashLine } from "react-icons/ri";
import AiSuggestions from "../../../components/StudentDashboardWidgets/ProgressAndGoal/AiSuggestions";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Analytics = () => {
  return (
    <div className="p-5">
      <SectionTitle
        title={"Analytics"}
        subTitle={
          "Here’s your personalized dashboard to manage users, track progress, and oversee platform performance."
        }
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="border border-base-300 p-4 rounded-2xl">
          <ScoreTrend />
        </div>
        <div className="border border-base-300 p-4 rounded-2xl">
          <GrowthTrend />
        </div>
        <div className="border border-base-300 p-4 rounded-2xl">
          <SubjectGrowth />
        </div>
        <div className="border border-base-300 p-4 rounded-2xl">
          <Achievements />
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-1">
              <RiLightbulbFlashLine className="text-2xl" />
              <h2 className="text-lg font-semibold text-gray-800 mt-4">
                AI Suggestions
              </h2>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Personalized recommendations
            </p>
            <AiSuggestions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
