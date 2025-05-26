const OrderData = ({
  title,
  mainValue,
  mainChange,
  mainChangeColor,
  prevLabel,
  detailsLink,
  extraContent,
}) => {
  return (
    <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-5 w-full ">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>
        <button className="text-gray-700">
          <span className="text-lg font-semibold">⋮</span>
        </button>
      </div>

      <div className="mt-4">
        <div className="text-2xl font-bold text-gray-900 ">
          <span className="text-3xl font-bold">{mainValue}</span>
          {mainChange && (
            <span className={`text-sm ml-1 ${mainChangeColor}`}>
              {mainChange}
            </span>
          )}
        </div>
        {extraContent && <div className="mt-2">{extraContent}</div>}
        <p className="text-xs text-gray-500 mt-1">
          {prevLabel}
        </p>
      </div>

      <div className="mt-4 flex justify-end items-center">
        <button className="border border-indigo-400 text-indigo-600 px-4 py-1 text-sm rounded-full hover:bg-indigo-50 transition">
          {detailsLink}
        </button>
      </div>
    </div>
  );
};

export default OrderData;
