import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import logo from "@/assets/logo.png";

const INavbar = ({ setContent }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const btnCompanies = () => {
    setContent(2);
  };
  const links = [
    {
      id: 1,
      link: "/individuals/home",
      name: "Home",
    },
    {
      id: 2,
      link: "/individuals/about",
      name: "about",
    },
    {
      id: 3,
      link: "/individuals/services",
      name: "services",
    },
    {
      id: 4,
      link: "/individuals/histories",
      name: "success histories",
    },
    {
      id: 5,
      link: "/individuals/resources",
      name: "resources",
    },
    {
      id: 6,
      link: "/individuals/contact",
      name: "contact",
    },
  ];

  return (
    <>
      <div className="fixed w-full h-24 bg-gray-600 text-white z-20  ">
        <div className="flex justify-between gap-6 items-center max-w-[1600px] mx-auto px-3 h-full">
          {/* <div className="hidden lg:flex items-center flex-row justify-center bg-white rounded-lg p-1 "></div> */}
          <img
            src={logo}
            alt=""
            className="object-contain h-20 hidden lg:block  "
          />
          <div className="hidden lg:flex items-center gap-20">
            <ul className="flex ">
              {links.map(({ id, link, name }) => (
                <Link key={id} to={link}>
                  <li className="px-4 capitalize  duration-300 hover:text-primary  hover:scale-110 cursor-pointer">
                    {name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {/* <div className="bg-white p-1 rounded-full block lg:hidden">
          </div> */}
          <img
            src="/favicon.png"
            className="h-10 object-contain lg:hidden block"
          />
          <button className="btn  btn-secondary " onClick={btnCompanies}>
            companies
          </button>
        </div>
      </div>

      <div
        className={`fixed w-full  text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-16 rounded-b-2xl bg-primary " : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link, name }) => (
            <Link
              onClick={() => setIsMenuShown(!isMenuShown)}
              to={link}
              key={id}
            >
              <li className="px-4 capitalize text-left duration-300 hover:text-white  hover:scale-110 cursor-pointer">
                {name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default INavbar;
