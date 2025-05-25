import {
  RiDiscussLine,
  RiBook3Line,
  RiPenNibLine,
  RiBookOpenLine,
  RiArrowRightUpLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const subjects = [
  {
    name: "Reading",
    icon: <RiBookOpenLine />,
    color: "blue",
    gradient: "from-blue-400 to-blue-200",
  },
  {
    name: "Written",
    icon: <RiPenNibLine />,
    color: "orange",
    gradient: "from-orange-400 to-orange-200",
  },
  {
    name: "Math",
    icon: <RiBook3Line />,
    color: "purple",
    gradient: "from-purple-400 to-purple-200",
  },
  {
    name: "Essay",
    icon: <RiDiscussLine />,
    color: "green",
    gradient: "from-green-400 to-green-200",
  },
];

export default function SubjectGrowth() {
  return (
    <div className="">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Subject growth</h2>
        <Link to="/subject_growth" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full">
          <RiArrowRightUpLine className="text-gray-500" />
        </Link>
      </div>

      {/* Subject Cards */}
      <div className="space-y-3">
        {subjects.map((subject, idx) => (
          <div
            key={idx}
            className={`md:flex items-center justify-between p-4 rounded-xl border border-${subject.color}-500 bg-${subject.color}-50`}
          >
            {/* Icon & Text */}
            <div className="flex items-center gap-3">
              <div
                className={`bg-${subject.color}-50 border border-${subject.color}-500 text-${subject.color}-500 p-3 rounded-full text-lg`}
              >
                {subject.icon}
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{subject.name}</h3>
                <p className="text-sm text-gray-500 hidden md:block">
                  You have to take 2 more tests to achieve your goal
                </p>
              </div>
            </div>

            <div
              className={` bg-gradient-to-br ${subject.gradient} text-white font-semibold p-4 my-2 rounded-xl flex items-center gap-1`}
            >
              20%
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 20L10 10L20 15L30 5L40 10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
