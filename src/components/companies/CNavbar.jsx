import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import logo from "@/assets/logo.png";

const CNavbar = ({ setContent }) => {
  const activeLink = ({ isActive }) =>
    isActive
      ? " relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-secondary"
      : ``;
  const [isMenuShown, setIsMenuShown] = useState(false);
  const btnIndividuals = () => {
    setContent(1);
  };
  const links = [
    {
      id: 1,
      link: "/companies/home",
      name: "Home",
    },
    {
      id: 2,
      link: "/companies/about",
      name: "about",
    },
    {
      id: 3,
      link: "/companies/services",
      name: "services",
    },
    {
      id: 4,
      link: "/companies/histories",
      name: "success histories",
    },
    {
      id: 5,
      link: "/companies/resources",
      name: "resources",
    },
    {
      id: 6,
      link: "/companies/contact",
      name: "contact",
    },
  ];

  return (
    <>
      <div className="fixed w-full h-24 bg-gray-400 text-white z-20  ">
        <div className="flex justify-between gap-4 items-center  lg:mx-10  px-3 h-full">
          {/* <div className="hidden lg:flex items-center flex-row justify-center bg-white rounded-lg p-1 "></div> */}
          <img
            src={logo}
            alt=""
            className="object-contain h-20 hidden lg:block  "
          />
          <div className="hidden lg:flex items-center mr-24 gap-20">
            <ul className="flex gap-6 ">
              {links.map(({ id, link, name }) => (
                <NavLink key={id} to={link} className={activeLink}>
                  <li className=" capitalize  duration-300 hover:text-secondary hover:scale-110 cursor-pointer">
                    {name}
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={22} /> : <FaBars size={22} />}
          </div>

          {/* <div className="bg-white p-1 rounded-full block lg:hidden">
          </div> */}
          <img
            src="/favicon.png"
            className="h-10 object-contain lg:hidden block"
          />
          <button
            className="btn btn-primary text-[12px] p-2 btn-outline capitalize hover:scale-105 duration-700 "
            onClick={btnIndividuals}
          >
            I Want<span className="lowercase">to</span>Imigrate
          </button>
        </div>
      </div>

      <div
        className={`fixed w-full  text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-16 rounded-b-2xl bg-gray-400 " : "top-[-100%]"
        }`}
      >
        <ul className="flex flex-col">
          {links.map(({ id, link, name }) => (
            <NavLink
              onClick={() => setIsMenuShown(!isMenuShown)}
              to={link}
              key={id}
            >
              <li className="px-4 capitalize text-left duration-300 hover:text-white  hover:scale-110 cursor-pointer">
                {name}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CNavbar;
