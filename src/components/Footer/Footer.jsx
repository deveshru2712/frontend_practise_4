import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  const NavLinks = [
    {
      id: 1,
      title: "Home",
      link: "/#",
    },
    {
      id: 2,
      title: "About",
      link: "/#",
    },
    {
      id: 3,
      title: "Contact",
      link: "/#",
    },
    {
      id: 4,
      title: "Blog",
      link: "/#",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* company detail */}
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center">
              Car Rental
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
              fugiat.
              <br />
            </p>

            <div className="flex items-center gap-3">
              <FaLocationArrow className="" />
              <p>Prayagraj, U.P, India</p>
            </div>

            <div className="flex items-center gap-3">
              <FaMobileAlt className="" />
              <p>+91 123456789</p>
            </div>

            {/* social media */}

            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>

              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>

              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>

          {/* navigation links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 py-8">
            {/* first col */}
            <div>
              <div>
                <h1 className="text-xl font-bold sm:text-left">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {NavLinks.map((items) => (
                    <li
                      key={items.id}
                      className="cursor-pointer hover:text-primary duration-300"
                    >
                      <span className="mr-2">&#11162;</span>
                      <a href={items.link}>{items.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* second col */}
            <div>
              <div>
                <h1 className="text-xl font-bold sm:text-left">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {NavLinks.map((items) => (
                    <li
                      key={items.id}
                      className="cursor-pointer hover:text-primary duration-300"
                    >
                      <span className="mr-2">&#11162;</span>
                      <a href={items.link}>{items.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* third col */}
            <div>
              <div>
                <h1 className="text-xl font-bold sm:text-left">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {NavLinks.map((items) => (
                    <li
                      key={items.id}
                      className="cursor-pointer hover:text-primary duration-300"
                    >
                      <span className="mr-2">&#11162;</span>
                      <a href={items.link}>{items.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
