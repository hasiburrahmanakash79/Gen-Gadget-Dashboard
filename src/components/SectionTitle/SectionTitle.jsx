import { FaRegBell } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="flex items-center justify-between mb-10">
      <div>
        <h1 className="text-xl font-semibold mb-3 text-[#023337]">{title}</h1>
        <p className="text-gray-500 hidden">{subTitle}</p>
      </div>
      <div className="flex items-center gap-5">
        {/* 🔍 Search Input with Right-side Icon */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search data, users, or reports"
            className="pl-4 pr-10 py-2 bg-gray-50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
            <RiSearchLine className="text-lg" />
          </span>
        </div>

        {/* 🔔 Bell with Red Dot */}
        <button className="relative">
          <FaRegBell className="text-2xl text-gray-700" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>

        {/* 👤 Rounded User Image */}
        <img
          src="https://randomuser.me/api/portraits/men/55.jpg"
          alt="User"
          className="w-9 h-9 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default SectionTitle;
