import StatCard from "../components/StartCard";

const DashboardCard = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Total Sales Card */}
      <StatCard
        title="Total Sales"
        subtitle="Last 7 days"
        mainValue="$350K"
        mainLabel="Sales"
        mainChange="↑ 10.4%"
        mainChangeColor="text-green-600"
        prevLabel="Previous 7days"
        prevValue="($235)"
        prevColor="text-indigo-600"
        detailsLink="Details"
      />

      {/* Total Orders Card */}
      <StatCard
        title="Total Orders"
        subtitle="Last 7 days"
        mainValue="10.7K"
        mainLabel="order"
        mainChange="↑ 14.4%"
        mainChangeColor="text-green-600"
        prevLabel="Previous 7days"
        prevValue="(7.6k)"
        prevColor="text-indigo-600"
        detailsLink="Details"
      />

      {/* Pending & Canceled Card */}
      <StatCard
        title="Pending & Canceled"
        subtitle="Last 7 days"
        mainValue={
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <div className="flex items-end gap-2 text-green-900">
                <p className=" font-semibold text-2xl">
                  509
                </p>
                <p className="text-sm font-normal">user 204</p>
              </div>
            </div>
            <div className="border-l border-gray-200 pl-4">
              <p className="text-sm text-gray-600">Canceled</p>
              <div className="flex items-end gap-2 text-red-500">
                <p className=" font-semibold text-2xl">
                  94
                </p>
                <span className="text-sm">↓ 14.4%</span>
              </div>
            </div>
          </div>
        }
        detailsLink="Details"
      />
    </div>
  );
};

export default DashboardCard;
