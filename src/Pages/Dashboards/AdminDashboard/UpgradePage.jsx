import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import UpgradeSwiper from "./UpgradeSwiper";

const currentPlan = {
  schoolName: "Convince School",
  phone: "+880 1636-828200",
  email: "mahdeereshid@gmail.com",
  country: "Bangladesh",
  invoiceId: "HU-fjw-92382",
  invoiceDate: "12/09/2024",
  amount: 55,
  billingId: "7325729579",
  cardNumber: "3545-1236-1344-3373",
};

const upgradePlans = [
  {
    name: "Standard",
    price: 155,
    oldPrice: 295,
    features: [
      "Automatic bot building",
      "Team collaboration",
      "AI model training",
      "Multilingual AI",
    ],
  },
  {
    name: "Starter",
    price: 99,
    oldPrice: 150,
    features: ["Basic bot building", "Limited collaboration", "Email support"],
  },
];

const billingHistory = [
  {
    plan: "Basic",
    issueDate: "12/06/2024",
    expireDate: "12/07/2024",
    amount: "$55",
    downloadLink: "#",
  },
  {
    plan: "Standard",
    issueDate: "12/04/2023",
    expireDate: "12/05/2024",
    amount: "$265",
    downloadLink: "#",
  },
];

const UpgradePage = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      // Re-init navigation
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="p-6 space-y-10">
      <SectionTitle title="Upgrade"></SectionTitle>
      {/* Upgrade Section */}
      <div className="md:grid md:grid-cols-3 gap-6 ">
        {/* Current Plan */}
        <div className="col-span-2 flex-1 border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium text-gray-600">Current Plan</h2>
            <div className="text-blue-500 font-medium flex items-center gap-1 text-sm">
              <input
                type="radio"
                checked
                readOnly
                className="accent-blue-500"
              />
              <span>Basic</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 py-4">
            {/* Left Info */}
            <div className="space-y-1 text-sm text-gray-700">
              <p className="text-base font-semibold text-gray-900">
                {currentPlan.schoolName}
              </p>
              <p>Phone: {currentPlan.phone}</p>
              <p>E-mail: {currentPlan.email}</p>
              <p>Country: {currentPlan.country}</p>
            </div>

            {/* Right Info */}
            <div className="space-y-1 text-sm text-gray-500 sm:text-right">
              <p>Invoice: {currentPlan.invoiceId}</p>
              <p>Invoice Date: {currentPlan.invoiceDate}</p>
              <p>Invoice Amount: ${currentPlan.amount}</p>
              <p>Billing ID: {currentPlan.billingId}</p>
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="flex items-center justify-between mt-2 border border-gray-200 p-3 rounded-lg bg-gray-50">
              <div className="flex items-center gap-5">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png"
                  alt="Visa"
                  className="h-2"
                />
                <span className="text-gray-700 text-sm tracking-wide">
                  {currentPlan.cardNumber}
                </span>
              </div>
              <div className="text-blue-500 text-xl font-bold">
                ${currentPlan.amount}
                <span className="text-sm font-normal text-gray-500">/mo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upgrade Plan */}
        <div className="col-span-1">
          <div className="flex items-center justify-between my-4">
            <h1 className="text-xl font-bold text-blue-500">Upgrade Plan</h1>
            <div className="flex gap-2">
              <button
                ref={prevRef}
                className="h-8 w-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center"
              >
                <FaChevronLeft className="text-lg" />
              </button>
              <button
                ref={nextRef}
                className="h-8 w-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center"
              >
                <FaChevronLeft className="text-lg rotate-180" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={"auto"}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className=""
          >
            {upgradePlans.map((plan, index) => {
              const savings = plan.oldPrice - plan.price;
              return (
                <SwiperSlide key={index} className="w-[300px]">
                  <div className="bg-gradient-to-b from-blue-400 to-blue-500 rounded-2xl text-white h-full p-4 flex flex-col justify-between shadow-md">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                          <div className="w-2.5 h-2.5 bg-white rounded-full" />
                        </div>
                        <h3 className="text-lg font-bold">{plan.name}</h3>
                      </div>

                      <ul className="space-y-2 text-sm pl-6 list-disc marker:text-white">
                        {plan.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <button className="bg-white text-blue-500 font-semibold rounded-lg p-2 hover:bg-blue-100 transition">
                        Buy Now
                      </button>
                      <div>
                        <div className="text-3xl font-extrabold text-end mb-3">
                          ${plan.price}
                          <span className="text-base font-normal">/yr</span>
                        </div>
                        <div className="text-sm flex items-center gap-5 justify-between">
                          <span className="line-through opacity-70">
                            ${plan.oldPrice}
                          </span>
                          <span className="bg-black/30 text-white px-2 py-1 rounded-full text-xs">
                            Save: ${savings}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Billing History */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Billing History
        </h2>
        <div className="overflow-x-auto bg-white rounded shadow-sm">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left text-gray-500 text-sm  bg-base-300">
                <th className="p-4">Plan</th>
                <th className="p-4">Issue</th>
                <th className="p-4">Expire</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Download</th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map((bill, idx) => (
                <tr
                  key={idx}
                  className="border-b border-base-300 last:border-none"
                >
                  <td className="p-4">{bill.plan}</td>
                  <td className="p-4">{bill.issueDate}</td>
                  <td className="p-4 text-red-500">{bill.expireDate}</td>
                  <td className="p-4">{bill.amount}</td>
                  <td className="p-4">
                    <a
                      href={bill.downloadLink}
                      className="text-blue-500 hover:underline"
                    >
                      Download PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <UpgradeSwiper/> */}
    </div>
  );
};

export default UpgradePage;
