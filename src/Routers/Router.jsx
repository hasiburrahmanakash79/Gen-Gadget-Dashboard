import { createBrowserRouter } from "react-router";
import Signup from "../Pages/Authentication/Signup";
import SignIn from "../Pages/Authentication/SignIn";
import OtpVerification from "../Pages/Authentication/OtpVerification";
import Dashboard from "../Layouts/Dashboard";
// import AdminHome from "../Pages/Dashboards/AdminDashboard/AdminHome";
import ManageStudents from "../Pages/Dashboards/AdminDashboard/ManageStudents";
import UpgradePage from "../Pages/Dashboards/AdminDashboard/UpgradePage";
import ProfilePage from "../Pages/Dashboards/Profile/ProfilePage";
import StudentHome from "../Pages/Dashboards/StudentDashboard/StudentHome";
import StudyPlan from "../Pages/Dashboards/StudentDashboard/StudyPlan";
import Analytics from "../Pages/Dashboards/StudentDashboard/Analytics";
import SubjectGrowthChart from "../components/StudentDashboardWidgets/Analytics/SubjectGrothChart";
import TestCenter from "../Pages/Dashboards/StudentDashboard/TestCenter";
import WrittenExam from "../components/StudentDashboardWidgets/TestCenter/WrittenExam";
import AllTopPerformingStudents from "../components/AdminDashboardWidgets/AllTopPerformingStudents";
import AllTeam from "../components/AdminDashboardWidgets/ManageStudent/AllTeam";
import AllAtRiskStudents from "../components/AdminDashboardWidgets/AllAtRiskStudents";
import ExamPerformance from "../components/StudentDashboardWidgets/ProgressAndGoal/ExamPerformance";
import UserQualification from "../Pages/Qualification/UserQualification";
import SellerOverview from "../Pages/Dashboards/SellerDashboard/SellerOverview";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/seller_overview",
        element: <SellerOverview />,
      },
      {
        path: "/student",
        element: <ManageStudents />,
      },
      {
        path: "/top-performing-students",
        element: <AllTopPerformingStudents />,
      },
      {
        path: "/all_teams",
        element: <AllTeam />,
      },
      {
        path: "/at_risk_students",
        element: <AllAtRiskStudents />,
      },
      {
        path: "/upgrade",
        element: <UpgradePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/admin_overview",
        element: <StudentHome />,
      },
      {
        path: "/exam_performance",
        element: <ExamPerformance />,
      },
      {
        path: "/study_plan",
        element: <StudyPlan />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/subject_growth",
        element: <SubjectGrowthChart />,
      },
      {
        path: "/test_center",
        element: <TestCenter />,
      },
      {
        path: "/exam_center",
        element: <WrittenExam />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/otp",
    element: <OtpVerification />,
  },
  {
    path: "/user_qualification",
    element: <UserQualification />,
  },
]);

export default router;
