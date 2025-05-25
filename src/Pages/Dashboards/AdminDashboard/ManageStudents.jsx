import { FaCirclePlus } from "react-icons/fa6";
import AtRiskStudents from "../../../components/AdminDashboardWidgets/AtRiskStudents";
import AllStudents from "../../../components/AdminDashboardWidgets/ManageStudent/AllStudents";
import StudentProgress from "../../../components/AdminDashboardWidgets/ManageStudent/StudentProgress";
import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import AddStudentModal from "../../../components/AdminDashboardWidgets/Modals/AddStudentModal";
import { RiArrowRightUpLine } from "react-icons/ri";
import Teams from "../../../components/AdminDashboardWidgets/ManageStudent/Teams";

const ManageStudents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <div className="p-5">
      <SectionTitle
        title={"Students"}
        subTitle={
          "Here’s your personalized dashboard to manage users, track progress, and oversee platform performance."
        }
      ></SectionTitle>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 items-stretch">
          <div className="border border-base-300 p-4 rounded-2xl flex flex-col h-full">
            <StudentProgress />
          </div>

          <div className="border border-base-300 p-4 rounded-2xl flex flex-col h-full">
            <Teams />
          </div>

          <div className="border border-base-300 p-4 rounded-2xl flex flex-col h-full">
            <div className="border-b border-base-300 pb-3 text-gray-500 flex items-center justify-between">
              <h4 className="">Add Student</h4>
              <button onClick={handleOpenModal}>
                <RiArrowRightUpLine className="border border-base-300 rounded-full p-1 w-8 h-8" />
              </button>
            </div>
            <div className="flex justify-center items-center space-x-2 w-full h-full mt-4">
              <button
                onClick={handleOpenModal}
                className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-500 text-white rounded-2xl transition duration-300 transform hover:scale-[1.02] hover:shadow-md"
              >
                <span className="text-lg font-semibold mb-2">Add Student</span>
                <FaCirclePlus className="text-2xl" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-3">
            <AllStudents />
          </div>
          <div>
            <AtRiskStudents />
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && <AddStudentModal onClose={handleCloseModal} />}
    </div>
  );
};

export default ManageStudents;
