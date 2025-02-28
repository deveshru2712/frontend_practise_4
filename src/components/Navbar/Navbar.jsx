import React from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Cars",
    link: "/#",
  },
  {
    id: 3,
    name: "About",
    link: "/#",
  },
  {
    id: 4,
    name: "Booking",
    link: "/#",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white/90 duration-300">
      <div className="container py-4">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold font-serif">Rentals.io</h1>
          </div>

          <div className="hidden md:block ">
            <ul className="flex items-center gap-8">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-2 border-b-2  border-transparent hover:border-b-2 hover:border-primary hover:text-primary transition-colors duration-500 text-lg font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            onClick={toggleTheme}
            className="flex items-center cursor-pointer"
          >
            {theme === "dark" ? (
              <BiSolidMoon className="text-2xl " />
            ) : (
              <BiSolidSun className="text-2xl " />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
