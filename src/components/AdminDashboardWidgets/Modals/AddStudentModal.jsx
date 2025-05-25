import { IoMdClose } from "react-icons/io";

const AddStudentModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-2xl rounded-2xl p-6 shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <IoMdClose size={22} />
        </button>

        <h2 className="text-lg font-semibold mb-6">Add Student</h2>

        {/* Student Details */}
        <div className="border border-base-300 rounded-xl p-4 mb-6">
          <h3 className="text-sm font-semibold mb-4 text-gray-700 bg-base-300 px-3 py-1 rounded">
            Student Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Student Name"
              className="border border-base-300 bg-base-200 rounded-lg p-2"
            />
            <input
              type="email"
              placeholder="Student Email"
              className="border border-base-300 bg-base-200 rounded-lg p-2"
            />
            <input
              type="text"
              placeholder="Student Phone"
              className="border border-base-300 bg-base-200 rounded-lg p-2"
            />
            <select className="border border-base-300 bg-base-200 rounded-lg p-2">
              <option>Assign Teacher</option>
              <option>Jhon Nick</option>
              <option>Sarah Khan</option>
            </select>
          </div>
        </div>

        {/* Parents Details */}
        <div className="border border-base-300 rounded-xl p-4">
          <h3 className="text-sm font-semibold mb-4 text-gray-700 bg-base-300 px-3 py-1 rounded">
            Parents Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Parents Name"
              className="border border-base-300 bg-base-200 rounded-lg p-2"
            />
            <input
              type="email"
              placeholder="Parents Email"
              className="border border-base-300 bg-base-200 rounded-lg p-2"
            />
            <input
              type="text"
              placeholder="Parents Phone"
              className="border border-base-300 bg-base-200 rounded-lg p-2"
            />
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end mt-6 space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-base-300 bg-base-200 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900">
            Add Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudentModal;
