import { useEffect, useState } from "react";
import logo from '../assets/logo/logo.png';
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FaUserTie,
  FaRegChessQueen,
  FaRegCircleUser,
  FaRightFromBracket,
  FaChartLine,
  FaFileSignature,
} from "react-icons/fa6";
import { IconContext } from "react-icons";
import Swal from "sweetalert2";
import {
  RiArrowRightSLine,
  RiGalleryView2,
  RiBookOpenLine,
  RiGraduationCapLine,
} from "react-icons/ri";

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
    RoleHome: RiGalleryView2,
    Student: RiGraduationCapLine,
    Teacher: FaUserTie,
    Upgrade: FaRegChessQueen,
    Book: RiBookOpenLine,
    Test: FaFileSignature,
    Analytics: FaChartLine,
    Home: RiGalleryView2,
  };

  const Menus = [
    {
      title: "Dashboard",
      path: "/admin_overview",
      icon: iconMappings.Home,
      role: "seller",
    },
    {
      title: "Order Management",
      path: "/order_management",
      icon: iconMappings.Student,
      role: "seller",
    },
    {
      title: "Customers",
      path: "/customers",
      icon: iconMappings.Teacher,
      role: "seller",
    },
    {
      title: "Coupon Code",
      path: "/coupon",
      icon: iconMappings.Upgrade,
      role: "seller",
    },
    {
      title: "Transaction",
      path: "/transaction",
      icon: iconMappings.Home,
      role: "seller",
    },
    {
      title: "Add Products",
      path: "/add_products",
      icon: iconMappings.Upgrade,
      role: "seller",
      gap: true,
    },
    {
      title: "Product List",
      path: "/product_list",
      icon: iconMappings.Upgrade,
      role: "seller",
    },
    {
      title: "Product Reviews",
      path: "/review",
      icon: iconMappings.Upgrade,
      role: "seller",
    },
    {
      title: "Dashboard",
      path: "/seller_overview",
      icon: iconMappings.Home,
      role: "admin",
      gap: true,
    },
    {
      title: "Buyer Management",
      path: "/study_plan",
      icon: iconMappings.Book,
      role: "admin",
    },
    {
      title: "Seller Management",
      path: "/seller_management",
      icon: iconMappings.Test,
      role: "admin",
    },
    {
      title: "Categories",
      path: "/categories",
      icon: iconMappings.Analytics,
      role: "admin",
    },
    {
      title: "Transaction",
      path: "/transaction",
      icon: iconMappings.Upgrade,
      role: "admin",
    },
    {
      title: "Activity Log",
      path: "/activity",
      icon: iconMappings.Upgrade,
      role: "admin",
    },
  ];

  const adminMenus = Menus.filter((menu) => menu.role === "admin");
  const studentMenus = Menus.filter((menu) => menu.role === "seller");
  const generalMenus = Menus.filter((menu) => menu.role === "general");

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={` ${
          open ? "w-64 p-4" : "w-14 text-center"
        } h-screen bg-base-300 fixed left-0 top-0 bottom-0 z-50 pt-8 transition-all duration-500`}
      >
        <RiArrowRightSLine
          className={`absolute cursor-pointer -right-5 text-gray-400 bg-base-300 shadow-2xl top-9 w-10 h-10 rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center gap-x-4 p-2">
          <img
            src={logo}
            alt="logo"
            className={`cursor-pointer w-14 p-1 duration-500`}
          />
        </div>

        <ul
          className={`${
            open ? "" : "flex flex-col items-center justify-center"
          }`}
        >
          <p className="text-xs text-gray-800 px-3 mt-10">Main menu</p>
          {(isAdmin ? adminMenus : studentMenus).map((Menu, index) => (
            <Link
              to={Menu.path}
              key={index}
              className={`flex rounded-full py-1.5 px-4 cursor-pointer text-sm items-center ${
                Menu.gap ? "mt-20" : "mt-2"
              } ${
                location.pathname === Menu.path
                  ? "bg-white text-blue-500"
                  : "hover:bg-white"
              }`}
            >
              <li className="flex items-center gap-x-2 text-md ">
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
        <div className="mt-28 ms-3.5 md:ms-0 bottom-20 absolute w-full">
          <Link
            to="/profile"
            className={`-ml-3.5 flex p-2 pl-6 cursor-pointer text-sm items-center w-full ${
              location.pathname === "/profile" ? "bg-white" : "hover:bg-white"
            }`}
          >
            <li className="flex items-center gap-x-4 w-full">
              <FaRegCircleUser />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Profile
              </span>
            </li>
          </Link>
          <button
            onClick={handleLogout}
            className="flex text-red-400 p-2 text-sm items-center cursor-pointer w-full"
          >
            <li className="flex items-center gap-x-4 w-full">
              <FaRightFromBracket />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Logout
              </span>
            </li>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={` ${
          open ? "pl-64 pr-4" : "pl-14 pr-2"
        } flex-1 overflow-y-auto transition-all duration-500 h-[100vh]`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
