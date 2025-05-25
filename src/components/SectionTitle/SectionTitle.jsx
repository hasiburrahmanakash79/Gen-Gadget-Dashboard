import { FaRegBell } from "react-icons/fa";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="flex items-center justify-between my-7">
      <div>
        <h1 className="md:text-3xl text-xl font-semibold mb-3">{title}</h1>
        <p className="text-gray-500 hidden md:block">{subTitle}</p>
      </div>
      <button className="h-12 w-12 rounded-full border border-blue-500 hover:text-white text-blue-500 hover:bg-blue-500 flex items-center justify-center p-3 duration-300">
        <FaRegBell className="text-2xl " />
      </button>
    </div>
  );
};

export default SectionTitle;
