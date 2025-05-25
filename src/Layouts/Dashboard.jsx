import { useEffect, useState } from "react";
import logo from "../assets/logo/logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  RiCoupon3Line,
  RiHome4Line,
  RiUserCommunityLine,
  RiShoppingCart2Line,
  RiAddCircleLine,
  RiContractLeftLine,
  RiBankCardLine,
  RiBox3Line,
  RiMessageLine,
  RiFundsBoxLine,
  RiFunctionAddLine,
  RiStoreLine,
  RiExternalLinkLine,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import { IconContext } from "react-icons";
import Swal from "sweetalert2";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const isAdmin = false;
  // const isStudent = true;
  const location = useLocation();
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout!",
      cancelButtonText: "No, Cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("User logged out");
      }
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iconMappings = {
    RoleHome: RiHome4Line,
    Cart: RiShoppingCart2Line,
    Customer: RiUserCommunityLine,
    Coupon: RiCoupon3Line,
    Add: RiAddCircleLine,
    Box: RiBox3Line,
    Review: RiMessageLine,
    Card: RiBankCardLine,
    Category: RiFunctionAddLine,
    Analytics: RiFundsBoxLine,
  };

  const Menus = [
    {
      title: "Dashboard",
      path: "/admin_overview",
      icon: iconMappings.RoleHome,
      role: "seller",
    },
    {
      title: "Order Management",
      path: "/order_management",
      icon: iconMappings.Cart,
      role: "seller",
    },
    {
      title: "Customers",
      path: "/customers",
      icon: iconMappings.Customer,
      role: "seller",
    },
    {
      title: "Coupon Code",
      path: "/coupon",
      icon: iconMappings.Coupon,
      role: "seller",
    },
    {
      title: "Transaction",
      path: "/transaction",
      icon: iconMappings.Card,
      role: "seller",
    },
    {
      title: "Add Products",
      path: "/add_products",
      icon: iconMappings.Add,
      role: "seller",
      gap: true,
    },
    {
      title: "Product List",
      path: "/product_list",
      icon: iconMappings.Box,
      role: "seller",
    },
    {
      title: "Product Reviews",
      path: "/review",
      icon: iconMappings.Review,
      role: "seller",
    },
    {
      title: "Dashboard",
      path: "/seller_overview",
      icon: iconMappings.RoleHome,
      role: "admin",
    },
    {
      title: "Buyer Management",
      path: "/study_plan",
      icon: iconMappings.Cart,
      role: "admin",
    },
    {
      title: "Seller Management",
      path: "/seller_management",
      icon: iconMappings.Customer,
      role: "admin",
    },
    {
      title: "Categories",
      path: "/categories",
      icon: iconMappings.Category,
      role: "admin",
    },
    {
      title: "Transaction",
      path: "/transaction",
      icon: iconMappings.Card,
      role: "admin",
    },
    {
      title: "Activity Log",
      path: "/activity",
      icon: iconMappings.Analytics,
      role: "admin",
    },
  ];

  const adminMenus = Menus.filter((menu) => menu.role === "admin");
  const sellerMenus = Menus.filter((menu) => menu.role === "seller");
  const generalMenus = Menus.filter((menu) => menu.role === "general");

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={` ${
          open ? "w-64 p-4" : "w-20 text-center"
        } h-screen shadow-lg border-r border-gray-200 fixed left-0 top-0 bottom-0 z-50 pt-8 transition-all duration-500`}
      >
        <RiContractLeftLine
          className={`absolute cursor-pointer right-1 text-gray-600 top-5 rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="p-2">
          <img
            src={logo}
            alt="logo"
            className={`cursor-pointer w-10 duration-500 ${!open && "w-full "}`}
          />
        </div>

        <ul
          className={`${
            open ? "" : "flex flex-col items-center justify-center"
          }`}
        >
          <p
            className={`text-sm text-gray-800 px-2 mt-3 ${
              open ? "flex" : "hidden"
            }`}
          >
            Main menu
          </p>
          {(isAdmin ? adminMenus : sellerMenus).map((Menu, index) => (
            <Link
              to={Menu.path}
              key={index}
              className={`flex rounded py-1.5 px-4 cursor-pointer text-sm items-center ${
                Menu.gap ? "mt-20" : "mt-2"
              } ${
                location.pathname === Menu.path
                  ? "bg-[#006850] text-white"
                  : "hover:bg-[#006850]/10"
              }`}
            >
              <li className="flex items-center gap-x-3 text-md ">
                <IconContext.Provider value={{ className: "react-icon text-xl" }}>
                  <Menu.icon />
                </IconContext.Provider>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
          {generalMenus.map((Menu, index) => (
            <Link
              to={Menu.path}
              key={index}
              className={`flex rounded-full p-2 cursor-pointer text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${
                location.pathname === Menu.path ? "bg-white" : "hover:bg-white"
              }`} // Add active class
            >
              <li className="flex items-center gap-x-4">
                <IconContext.Provider value={{ className: "react-icon" }}>
                  <Menu.icon />
                </IconContext.Provider>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>

        {/* Profile + Logout */}
        <div className="mt-28 ms-3.5 md:ms-0 p-2 bottom-20 absolute w-full">
          <div>
            <Link
              to="/profile"
              className={`flex items-center gap-x-2 w-full -ml-4 p-2 pl-6 cursor-pointer text-sm items-center w-full ${
                location.pathname === "/profile"
              }`}
            >
              <img
                src="https://randomuser.me/api/portraits/men/31.jpg"
                alt=""
                className={`w-10 rounded-full ${!open && "hidden"}`}
              />
              <span className={`${!open && "hidden"}`}>
                <p className="font-bold">Deal port</p>
                <p>user@user.com</p>
              </span>
              <button
                onClick={handleLogout}
                className={`text-2xl ${!open && "ms-4"}`}
              >
                <RiLogoutBoxRLine />
              </button>
            </Link>
            <Link
              to="/profile"
              className={`flex items-center justify-between gap-x-2 w-full -ml-4 mt-5 ${open && "shadow rounded-xl border border-gray-200"}  py-3 px-8 cursor-pointer text-sm items-center w-full ${
                location.pathname === "/profile"
              }`}
            >
              <div className="flex items-center gap-x-2">
                <span className={`text-2xl ${!open && "hidden"}`}>
                  {" "}
                  <RiStoreLine />{" "}
                </span>
                <span className={`${!open && "hidden"}`}>
                  <p className="font-bold">Your Shop</p>
                </span>
              </div>
              <span className={`text-2xl ${!open && ""}`}>
                <RiExternalLinkLine />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={` ${
          open ? "pl-64 pr-4" : "pl-20 pr-2"
        } flex-1 overflow-y-auto transition-all duration-500 h-[100vh]`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
