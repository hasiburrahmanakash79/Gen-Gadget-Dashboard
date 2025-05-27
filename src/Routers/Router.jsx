import { createBrowserRouter } from "react-router";
import Signup from "../Pages/Authentication/Signup";
import SignIn from "../Pages/Authentication/SignIn";
import OtpVerification from "../Pages/Authentication/OtpVerification";
import Dashboard from "../Layouts/Dashboard";
import ProfilePage from "../Pages/Dashboards/Profile/ProfilePage";
import SellerOverview from "../Pages/Dashboards/SellerDashboard/SellerOverview";
import OrderManagement from "../Pages/Dashboards/SellerDashboard/OrderManagement";
import Customers from "../Pages/Dashboards/SellerDashboard/Customers";
import Transaction from "../Pages/Dashboards/SellerDashboard/Transaction";
import CouponCode from "../Pages/Dashboards/SellerDashboard/CouponCode";
import AddNewProduct from "../Pages/Dashboards/SellerDashboard/AddNewProduct";
import AdminOverview from "../Pages/Dashboards/AdminDashboard/AdminOverview";
import SellerManagement from "../Pages/Dashboards/AdminDashboard/SellerManagement";
import BuyerManagement from "../Pages/Dashboards/AdminDashboard/BuyerManagement";
import Categories from "../Pages/Dashboards/AdminDashboard/Categories";
import Activity from "../Pages/Dashboards/AdminDashboard/Activity";
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
        path: "/coupon",
        element: <CouponCode />,
      },
      {
        path: "/add_products",
        element: <AddNewProduct />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/admin_overview",
        element: <AdminOverview />,
      },
      {
        path: "/seller_management",
        element: <SellerManagement />,
      },
      {
        path: "/buyer_management",
        element: <BuyerManagement />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/activity",
        element: <Activity />,
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
]);

export default router;
