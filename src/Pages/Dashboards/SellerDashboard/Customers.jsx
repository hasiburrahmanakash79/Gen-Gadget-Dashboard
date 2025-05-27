// import React from 'react';

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import AllCustomerTable from "../../../components/SellerDashboardWidgets/Customers/AllCustomerTable";
import CustomerAverageCard from "../../../components/SellerDashboardWidgets/Customers/CustomerAverageCard";
import CustomerOverviewChart from "../../../components/SellerDashboardWidgets/Customers/CustomerOverviewChart";

const Customers = () => {
  return (
    <div className="p-10">
      <SectionTitle title="Customers" />
      <div className="grid grid-cols-4 gap-5 mt-5">
        <div className="col-span-1">
          <CustomerAverageCard />
        </div>
        <div className="col-span-3 h-full">
            <CustomerOverviewChart />
        </div>
      </div>
      <div>
        <AllCustomerTable/>
      </div>
    </div>
  );
};

export default Customers;
