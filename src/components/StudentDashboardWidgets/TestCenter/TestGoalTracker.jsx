import {
  RiBookOpenLine,
  RiPenNibLine,
  RiBook3Line,
  RiDiscussLine,
} from "react-icons/ri";
import SharedModal from "../../UI/EexamModal/SharedModal";
import useModal from "../../UI/EexamModal/useModal";

const goals = [
  {
    name: "Reading",
    icon: <RiBookOpenLine className="text-blue-500" />,
    color: "blue",
    progress: 7,
  },
  {
    name: "Written",
    icon: <RiPenNibLine className="text-orange-500" />,
    color: "orange",
    progress: 9,
  },
  {
    name: "Math",
    icon: <RiBook3Line className="text-green-500" />,
    color: "green",
    progress: 4,
  },
  {
    name: "Essay",
    icon: <RiDiscussLine className="text-purple-500" />,
    color: "purple",
    progress: 5,
  },
];

export default function TestGoalTracker() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left side - Goals */}
      <div className="col-span-2 bg-white p-6 rounded-2xl border border-base-300">
        <h2 className="text-lg font-semibold">AI Test Goal</h2>
        <p className="text-sm text-gray-500 mb-4">
          Track your progress towards weekly targets
        </p>

        <div className="md:grid grid-cols-2 gap-6">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2 py-4"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`bg-${goal.color}-50 border border-${goal.color}-500 p-2 rounded-full text-2xl w-12 h-12 flex items-center justify-center`}
                >
                  {goal.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{goal.name}</h3>
                  <p className="text-sm text-gray-500 hidden md:block">
                    You have to take 2 more tests to achieve your goal
                  </p>
                </div>
              </div>
              {/* Progress ring */}
              <div className="relative w-12 h-12">
                <svg
                  className="transform -rotate-90"
                  width="100%"
                  height="100%"
                  viewBox="0 0 36 36"
                >
                  {/* Background ring */}
                  <circle
                    className="text-gray-200"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    cx="18"
                    cy="18"
                    r="16"
                  />
                  {/* Progress ring */}
                  <circle
                    className={`text-${goal.color}-500 transition-all duration-500 ease-out`}
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="100"
                    strokeDashoffset={100 - (goal.progress / 10) * 100}
                    strokeLinecap="round"
                    cx="18"
                    cy="18"
                    r="16"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-400">
                  {goal.progress}/10
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Full Test */}
      <div className="bg-white p-6 rounded-2xl border border-base-300 flex flex-col justify-between mt-4 lg:mt-0">
        <div>
          <h3 className="font-semibold text-gray-800">Full Test</h3>
          <p className="text-sm text-gray-500 mb-4">
            Now you can prepare for a full test
          </p>

          <div className="bg-gray-100 p-4 rounded-xl text-sm mb-2">
            <h4 className="font-medium text-gray-700 mb-2">Test road map</h4>
            <div className="space-y-1 text-gray-600">
              <div className="flex justify-between">
                <span>Math</span> <span>40 mark</span>
              </div>
              <div className="flex justify-between">
                <span>Reading</span> <span>40 mark</span>
              </div>
              <div className="flex justify-between">
                <span>Writing</span> <span>40 mark</span>
              </div>
              <div className="flex justify-between">
                <span>Essay</span> <span>80 mark</span>
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-black text-white rounded-md px-4 py-2 w-full text-sm hover:bg-gray-800"
          onClick={openModal}
        >
          Start Full Test
        </button>
        <SharedModal isOpen={isOpen} onClose={closeModal} />
      </div>
    </div>
  );
}
