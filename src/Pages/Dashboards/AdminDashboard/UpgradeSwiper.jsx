import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
    name: "Premium",
    price: 199,
    oldPrice: 350,
    features: ["Priority support", "More bots", "Advanced analytics"],
  },
];

export default function UpgradeSwiper() {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto">
      {/* Swiper Nav Buttons */}
      <div className="absolute top-0 right-0 z-10 flex gap-2 pr-6 pt-2">
        <div className="swiper-button-prev !static !text-gray-500 !bg-white !rounded-full !p-2 shadow" />
        <div className="swiper-button-next !static !text-gray-500 !bg-white !rounded-full !p-2 shadow" />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={"auto"}
        spaceBetween={20}
        className="mt-10 pl-4"
      >
        {upgradePlans.map((plan, index) => {
          const isFirst = index === 0;
          const savings = plan.oldPrice - plan.price;

          return (
            <SwiperSlide
              key={index}
              className={`${
                isFirst ? "w-[600px]" : "w-[220px] opacity-70 scale-[0.95]"
              } transition-all duration-300`}
            >
              <div className="bg-[#2196f3] h-full rounded-2xl p-6 text-white flex flex-col justify-between shadow-md">
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

                <div className="flex items-center justify-between mt-6">
                  <button className="bg-white text-blue-500 font-semibold rounded-md px-4 py-2 hover:bg-blue-100 transition">
                    Buy Now
                  </button>
                  <div className="text-end">
                    <div className="text-3xl font-extrabold mb-2">
                      ${plan.price}
                      <span className="text-base font-normal">/yr</span>
                    </div>
                    <div className="text-sm flex items-center gap-2 justify-end">
                      <span className="line-through opacity-80">
                        ${plan.oldPrice}
                      </span>
                      <span className="bg-black/30 px-2 py-1 rounded-full text-xs">
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
  );
}
