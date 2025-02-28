import React from "react";
import Car from "../../assets/car1.png";

const About = () => {
  return (
    <div className="dark:bg-black dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div>
            <img
              src={Car}
              alt="car_logo"
              className="sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1 className="text-3xl sm:text-4xl font-bold font-serif ">
                About Us
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                pariatur veritatis nesciunt, debitis voluptatem inventore.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                ipsa optio ea eius numquam dolorem eveniet sint debitis nobis
                voluptates labore ipsum perspiciatis
              </p>
              <button className="button-outline">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
