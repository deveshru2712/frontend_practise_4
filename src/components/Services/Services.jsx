import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsList = [
  {
    id: 1,
    name: "Best Price",

    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "/#",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, amet",
    aosDelay: "0",
  },
  {
    id: 2,
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "/#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, deserunt!",
    aosDelay: "500",
  },
  {
    id: 3,
    name: "Experience Drivers",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "/#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, deserunt!",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <div className="py-14 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">
            Why Choose Us ?
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsList.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
            >
              <div className="grid place-items-center">{item.icon}</div>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <a href={item.link}>Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
