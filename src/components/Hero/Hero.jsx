import React from "react";
import BlackCar from "../../assets/car.png";
import Car from "../../assets/banner-car.png";

const Hero = ({ theme }) => {
  return (
    <div className="dark:bg-black dark:text-white duration-300 relative z-20">
      <div className="container min-h-[620px] flex">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="order-1 sm:order-2"
          >
            {theme === "light" ? (
              <img
                src={Car}
                alt="car"
                className="relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.5)]"
              />
            ) : (
              <img
                src={BlackCar}
                alt="car"
                className="relative -z-10 max-h-[600px] sm:scale-125"
              />
            )}
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-primary text-2xl font-serif"
            >
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif "
            >
              Car Rental
            </h1>
            <p data-aos="fade-up" data-aos-delay="800">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut,
              quia. <br /> Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Distinctio, quidem!
            </p>
            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              className="bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
