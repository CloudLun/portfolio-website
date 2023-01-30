import React from "react";

const Webwork = ({ title, img, link, githubLink }) => {
  return (
    <div className="mb-[20px] hover:translate-y-[-10px] cursor-pointer">
      <a href={link}>
        <img src={img} alt="" />
      </a>
      <div className="flex justify-between mt-[10px] text-[14px]">
        <a className="font-[500]" href={link} target="_blank">
          {title}
        </a>
        {/* <a className="text-font-gray hover:text-black" href={githubLink} target="_blank">
          Github
        </a> */}
      </div>
    </div>
  );
};

export default Webwork;
