import { createBrowserRouter } from "react-router";
import Signup from "../Pages/Authentication/Signup";
import SignIn from "../Pages/Authentication/SignIn";
import OtpVerification from "../Pages/Authentication/OtpVerification";
import Dashboard from "../Layouts/Dashboard";
// import AdminHome from "../Pages/Dashboards/AdminDashboard/AdminHome";
// import ManageStudents from "../Pages/Dashboards/AdminDashboard/ManageStudents";
import UpgradePage from "../Pages/Dashboards/AdminDashboard/UpgradePage";
import ProfilePage from "../Pages/Dashboards/Profile/ProfilePage";
// import AllTopPerformingStudents from "../components/AdminDashboardWidgets/AllTopPerformingStudents";
// import AllTeam from "../components/AdminDashboardWidgets/ManageStudent/AllTeam";
import AllAtRiskStudents from "../components/AdminDashboardWidgets/AllAtRiskStudents";
import UserQualification from "../Pages/Qualification/UserQualification";
import SellerOverview from "../Pages/Dashboards/SellerDashboard/SellerOverview";
import OrderManagement from "../Pages/Dashboards/SellerDashboard/OrderManagement";
import Customers from "../Pages/Dashboards/SellerDashboard/Customers";
import Transaction from "../Pages/Dashboards/SellerDashboard/Transaction";
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
        path: "/order_management",
        element: <OrderManagement />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/transaction",
        element: <Transaction />,
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
