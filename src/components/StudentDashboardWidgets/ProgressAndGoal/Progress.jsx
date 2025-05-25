import SharedModal from "../../UI/EexamModal/SharedModal";
import useModal from "../../UI/EexamModal/useModal";

const Progress = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div className="border border-base-300 rounded-2xl p-4 flex-1">
      <div className="border-b border-base-300 pb-3 text-gray-500 flex items-center justify-between">
        <h4 className="">Progress</h4>
        <select
          className="text-sm px-2 py-1 rounded-md outline-none text-gray-700"
          name="Weekly"
          id=""
        >
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <div className="mt-2">
        <h1>
          <span className="text-3xl font-bold">20%</span>{" "}
        </h1>
        <h5>
          <span className="text-lg text-green-600">+6%</span>{" "}
          <span className="text-lg text-gray-400">from last week</span>
        </h5>
      </div>
      <div className="w-full bg-gray-200 h-3 rounded-full my-5">
        <div
          className="h-3 rounded-full bg-gradient-to-b from-blue-300 to-blue-500"
          style={{ width: `70%` }}
        ></div>
      </div>
      <div className="flex items-center text-sm mt-5">
        <button
          className="bg-black text-white rounded-md px-4 py-2 w-full text-sm hover:bg-gray-800"
          onClick={openModal}
        >
          Start Today’s Plan
        </button>
        <SharedModal isOpen={isOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Progress;
