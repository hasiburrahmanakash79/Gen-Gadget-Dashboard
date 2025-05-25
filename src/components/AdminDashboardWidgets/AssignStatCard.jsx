// src/components/DashboardWidgets/AssignStatCard.jsx

const AssignStatCard = ({ data }) => {
  return (
    <div className="border border-base-300 p-4 rounded-2xl flex flex-col">
      <div className="border-b border-base-300 pb-3 text-gray-500 flex items-center justify-between mb-5">
        <h4 className="">All Assign</h4>
        <select className="text-sm px-2 py-1 rounded-md outline-none text-gray-700"  name="Weekly" id="">
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h5 className="text-gray-700">Teacher</h5>
          <p className="text-sm text-gray-500">
            <span className="text-xl font-bold text-blue-500">
              {data.teacherAssigned}
            </span>
            /{data.teacherTotal}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h5 className="text-gray-700">Students</h5>
          <p className="text-sm text-gray-500">
            <span className="text-xl font-bold text-blue-500">
              {data.studentAssigned}
            </span>
            /{data.studentTotal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssignStatCard;
