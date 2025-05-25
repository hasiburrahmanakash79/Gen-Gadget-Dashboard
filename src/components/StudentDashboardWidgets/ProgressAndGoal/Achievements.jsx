import { useState } from "react";
import { FaMedal } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";

const Achievements = () => {
  const levels = [
    { label: "Beginner", color: "bg-blue-600", progress: 0 },
    { label: "Developing", color: "bg-cyan-600", progress: 20 },
    { label: "Proficient", color: "bg-green-600", progress: 40 },
    { label: "Advanced", color: "bg-yellow-600", progress: 70 },
    { label: "Elite", color: "bg-purple-600", progress: 100 },
  ];
  const [currentProgress, setCurrentProgress] = useState(70);
  
  const activeLevel = levels.reduce((acc, level) =>
    currentProgress >= level.progress ? level : acc
  );

  return (
    <div className="">
      <div className="flex items-center gap-2 mb-4">
        <SlBadge className="text-gray-700" />
        <h2 className="text-lg font-semibold">Achievements</h2>
      </div>

      {/* Levels */}
      <div className="flex justify-between mb-4">
        {levels.map((level) => (
          <div
            key={level.label}
            className={`flex flex-col items-center gap-1 ${
              level.label === activeLevel.label
                ? "text-blue-400 font-semibold"
                : "text-gray-500"
            }`}
          >
            <div
              className={`md:w-16 md:h-16 h-10 w-10 rounded-xl flex items-center justify-center text-white ${
                level.label === activeLevel.label
                  ? `${level.color} shadow-lg`
                  : `${level.color} opacity-80`
              }`}
            >
              <FaMedal />
            </div>
            <span className="text-xs md:flex hidden">{level.label}</span>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="relative h-3 rounded-full bg-gray-200" >
        <div
          className="absolute h-3 rounded-full bg-gradient-to-b from-blue-300 to-blue-500"
          style={{ width: `${currentProgress}%` }}
        />
        
        <div
          className="absolute translate-x-[-50%]"
          style={{ left: `${currentProgress}%` }}
        >
          <div className="tooltip tooltip-open tooltip-bottom" data-tip={`${currentProgress}%`} >
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
