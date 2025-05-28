import StatCard from '../SellerDashboardWidgets/components/StartCard';

const UserDataCard = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
      {/* Total user Card */}
      <StatCard
        title="Total Users"
        subtitle="Last 7 days"
        mainValue="350K"
        mainLabel="Sales"
        mainChange="↑ 10.4%"
        mainChangeColor="text-green-600"
        prevLabel="Previous 7days"
        prevValue="($235)"
        prevColor="text-indigo-600"
        detailsLink="Details"
      />

      {/* Total Buyer Card */}
      <StatCard
        title="Total Buyers"
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

      {/* Seller Card */}
      <StatCard
        title="To Sellers"
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
    </div>
    );
};

export default UserDataCard;