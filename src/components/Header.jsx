import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import hamburger from "../assets/icons/hamburger.png";
import close from "../assets/icons/close.png";

const Header = ({ selectedPage }) => {
  const navigate = useNavigate();
  const [sidebarExpand, setSidebarExpand] = useState(false);
  const handleClickIcon = () => {
    setSidebarExpand(!sidebarExpand);
  };

  const navigateMain = () => {
    navigate("/");
  };
  const navigateWebworks = () => {
    navigate("/webworks");
  };
  const navigateAbout = () => {
    navigate("/about");
  };
  const navigateContact = () => {
    navigate("/contact");
  };

  return (
    <div className="relative z-50">
      <div
        className={`fixed top-0 md:hidden flex flex-col items-center justify-center gap-[10px] w-[85%] h-[100%] bg-white text-[24px] font-bold ease-in-out duration-300 z-999 ${
          sidebarExpand ? "visible" : "hidden"
        }`}
      >
        <div className="cursor-pointer" onClick={navigateMain}>
          Projects
        </div>
        <div className="cursor-pointer" onClick={navigateAbout}>
          About
        </div>
        <div className="cursor-pointer" onClick={navigateContact}>
          Contact
        </div>
      </div>
      <div className="flex justify-between items-center m-auto pt-[25px]">
        <div className="text-[20px] font-[700] tracking-wide">LUN HUNG</div>
        <div className="md:flex hidden gap-[18px] text-font-gray">
          <div
            className={`cursor-pointer hover:text-black ${
              selectedPage === "main" ? "text-black" : "font-gray"
            }`}
            onClick={navigateMain}
          >
            Projects
          </div>
          <div
            className={`cursor-pointer hover:text-black ${
              selectedPage === "about" ? "text-black" : "font-gray"
            }`}
            onClick={navigateAbout}
          >
            About
          </div>
          <div
            className={`cursor-pointer hover:text-black ${
              selectedPage === "contact" ? "text-black" : "font-gray"
            }`}
            onClick={navigateContact}
          >
            Contact
          </div>
        </div>
        <img
          src={sidebarExpand ? close : hamburger}
          alt="hamburger"
          className="absolute right-0 md:hidden w-[24px] h-[24px] cursor-pointer"
          onClick={handleClickIcon}
        />
      </div>
    </div>
  );
};

export default Header;
