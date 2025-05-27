const TransactionAverageCard = () => {
  const revenueData = [
    {
      title: "Total Revenue",
      mainValue: "1,234",
      mainChange: "+5%",
      detailsLink: "/customers/details",
    },
    {
      title: "Completed Transactions",
      mainValue: "1,234",
      mainChange: "+5%",
      detailsLink: "/customers/details",
    },
    {
      title: "Pending Transactions",
      mainValue: "1,20",
      mainChange: "+5%",
      detailsLink: "/customers/details",
    },
    {
      title: "Failed Transactions",
      mainValue: "1,234",
      mainChange: "-5%",
      detailsLink: "/customers/details",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-5">
      {revenueData.map((customer, index) => (
        <div key={index} className="">
          <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-5 w-full">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {customer.title}
                </h2>
              </div>
              <button className="text-gray-700">
                <span className="text-lg font-semibold">⋮</span>
              </button>
            </div>

            <div className="mt-4">
              <div className="text-2xl font-bold text-gray-900">
                {customer.mainValue}

                <span className="text-sm ml-1 text-green-500">
                  {customer.mainChange}
                </span>
              </div>
              <p className="text-xs text-gray-500 pt-2">Last 7 days</p>
            </div>

            <div className="mt-4 flex justify-end items-center">
              <button className="border border-indigo-400 text-indigo-600 px-4 py-1 text-sm rounded-full hover:bg-indigo-50 transition">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionAverageCard;