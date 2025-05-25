import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import TeacherProgress from "../../../components/AdminDashboardWidgets/ManageTeacher/TeacherProgress";
import AllTeacher from "../../../components/AdminDashboardWidgets/ManageTeacher/AllTeacher";
import AddTeacherModal from "../../../components/AdminDashboardWidgets/Modals/AddTeacherModal";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { RiArrowRightUpLine } from "react-icons/ri";
import Teams from "../../../components/AdminDashboardWidgets/ManageStudent/Teams";

const ManageTeacher = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="p-5">
      <SectionTitle
        title={"Teacher"}
        subTitle={
          "Here’s your personalized dashboard to manage users, track progress, and oversee platform performance."
        }
      ></SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        <div className="border border-base-300 p-4 rounded-2xl">
          <TeacherProgress />
        </div>
        <div className="border border-base-300 p-4 rounded-2xl flex flex-col h-full">
          <Teams />
        </div>
        <div className="border border-base-300 p-4 rounded-2xl flex flex-col">
          <div className="border-b border-base-300 pb-3 text-gray-500 flex items-center justify-between mb-4">
            <h4 className="">Add Teacher</h4>
            <button onClick={handleOpenModal}>
              <RiArrowRightUpLine className="border border-base-300 rounded-full p-1 w-8 h-8" />
            </button>
          </div>
          <div className="flex justify-center items-center space-x-2 w-full h-full">
            <button
              onClick={handleOpenModal}
              className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-500 text-white rounded-2xl transition duration-300 transform hover:scale-[1.02] hover:shadow-md"
            >
              <span className="text-lg font-semibold mb-2">Add Teacher</span>
              <FaCirclePlus className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-7">
        <AllTeacher />
      </div>

      {/* Modal */}
      {isModalOpen && <AddTeacherModal onClose={handleCloseModal} />}
    </div>
  );
};

export default ManageTeacher;
