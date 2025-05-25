import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import AddStudentModal from "./Modals/AddStudentModal";
import AddTeacherModal from "./Modals/AddTeacherModal";
import { RiArrowRightUpLine } from "react-icons/ri";

const AddMemberCard = () => {
  const [selected, setSelected] = useState("Students");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (role) => {
    setSelected(role);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="border border-base-300 p-4 rounded-2xl flex flex-col ">
      <div className="border-b border-base-300 pb-3 text-gray-500 flex items-center justify-between">
        <h4 className="">Add Member</h4>
        <RiArrowRightUpLine className="border border-base-300 rounded-full p-1 w-8 h-8" />
      </div>

      <div className="flex space-x-2 h-full pt-4">
        <button
          onClick={() => handleOpenModal("Teacher")}
          className={`flex-1 h-full w-full rounded-xl border p-4 flex flex-col items-center justify-center space-y-2 transition duration-300 transform hover:scale-[1.02] hover:shadow-md ${
            selected === "Teacher"
              ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white"
              : "border-base-300 text-gray-800 hover:border-blue-400"
          }`}
        >
          <span className="text-sm font-medium">Teacher</span>
          <div
            className={`border rounded-md p-1 ${
              selected === "Teacher" ? "border-white" : "border-base-300"
            }`}
          >
            <FaPlus size={12} />
          </div>
        </button>

        <button
          onClick={() => handleOpenModal("Students")}
          className={`flex-1 h-full w-full rounded-xl border p-4 flex flex-col items-center justify-center space-y-2 transition duration-300 transform hover:scale-[1.02] hover:shadow-md ${
            selected === "Students"
              ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white"
              : "border-gray-300 text-gray-800 hover:border-blue-400"
          }`}
        >
          <span className="text-sm font-medium">Students</span>
          <div
            className={`border rounded-md p-1 ${
              selected === "Students" ? "border-white" : "border-gray-400"
            }`}
          >
            <FaPlus size={12} />
          </div>
        </button>
      </div>

      {selected === "Students" && isModalOpen && (
        <AddStudentModal onClose={handleCloseModal} />
      )}
      {selected === "Teacher" && isModalOpen && (
        <AddTeacherModal onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default AddMemberCard;
