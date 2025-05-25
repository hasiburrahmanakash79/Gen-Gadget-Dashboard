import { RiDiscussLine, RiPenNibLine, RiBookOpenLine } from "react-icons/ri";
import useModal from "../../UI/EexamModal/useModal";
import SharedModal from "../../UI/EexamModal/SharedModal";

const TodayTask = () => {

  const { openModal, closeModal, isOpen } = useModal();

  return (
    <div className="border border-base-300 rounded-2xl p-4 flex-1 h-full">
      <div className="">
        <h4 className="text-xl font-semibold ">Today Test</h4>
        <p className="text-gray-500 text-xs">
          Al-generated based on your performance
        </p>
      </div>
      <div className=" mt-10">
        <div className="flex items-center gap-5 mb-5">
          <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-500 flex items-center justify-center text-blue-500 text-2xl">
            <RiBookOpenLine />
          </div>
          <div>
            <h1 className="font-semibold">Math: Quadratic Equations</h1>
            <div className="md:flex items-center gap-5 text-gray-400 text-sm">
              <p>45 minutes</p>
              <p>• High priority</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 mb-5">
          <div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-500 flex items-center justify-center text-orange-500 text-2xl">
            <RiPenNibLine />
          </div>
          <div>
            <h1 className="font-semibold">
              Reading: Practice Passage Analysis
            </h1>
            <div className="md:flex items-center gap-5 text-gray-400 text-sm">
              <p>35 minutes</p>
              <p>• High priority</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 mb-5">
          <div className="w-14 h-14 rounded-full bg-green-50 border border-green-500 flex items-center justify-center text-green-500 text-2xl">
            <RiDiscussLine />
          </div>
          <div>
            <h1 className="font-semibold">
              Writing: Essay Structure Review
            </h1>
            <div className="md:flex items-center gap-5 text-gray-400 text-sm">
              <p>25 minutes</p>
              <p>• Medium priority</p>
            </div>
          </div>
        </div>
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

export default TodayTask;
