import React from "react";

import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const Cars = () => {
  const CarList = [
    {
      id: 1,
      name: "Range Rover",
      image: whiteCar,
      aosDelay: "0",
      price: "1000",
    },
    {
      id: 2,
      name: "Scorpio White",
      image: car2,
      aosDelay: "500",
      price: "300",
    },
    {
      id: 3,
      name: "Scorpio blue",
      image: car3,
      aosDelay: "1000",
      price: "200",
    },
  ];

  return (
    <div className="pb-24 bg-white dark:bg-dark dark:text-white pt-12">
      <div className="container">
        {/* heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Lorem ipsum dolor sit.
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, aut!
        </p>

        {/* Car List Card */}

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {CarList.map((item) => (
              <div
                data-aos="fade-up"
                data-aos-delay={item.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                key={item.id}
              >
                <div className="w-full h-[120px]">
                  <img
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{item.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${item.price}/Day</p>
                    <a href="/#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  12Km
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" grid place-items-center mt-8">
          <button
            data-aos="fade-up"
            data-aos-duration="1500"
            className="button-outline"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cars;
