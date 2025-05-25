// import React from "react";
import MCQTest from "../../../components/StudentDashboardWidgets/StudyPlan/MCQTest";
import WrittenTest from "../../../components/StudentDashboardWidgets/StudyPlan/WrittenTest";
import PlanProgress from "../../../components/StudentDashboardWidgets/StudyPlan/PlanProgress";
import TodayTask from "../../../components/StudentDashboardWidgets/StudyPlan/TodayTask";
import Performance from "../../../components/StudentDashboardWidgets/ProgressAndGoal/Performance";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const StudyPlan = () => {
  return (
    <div className="p-5">
      <SectionTitle
      title={"Study Plan"}
      subTitle={
        "Here’s your personalized dashboard to manage users, track progress, and oversee platform performance."
      }
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <MCQTest />
          <WrittenTest />
        </div>
        <div>
          <PlanProgress />
        </div>
      </div>
      <div className="my-7">
        <TodayTask />
      </div>
      <div className="mb-4">
        <Performance />
      </div>
    </div>
  );
};

export default StudyPlan;
