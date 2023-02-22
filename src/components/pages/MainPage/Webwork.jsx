import React from "react";

const Webwork = ({ title, cover, websiteLink, projectType }) => {
  return (
    <div className="mb-[15px] overflow-hidden cursor-pointer hover:translate-y-[-10px]">
      <a href={websiteLink} target="_blank">
        <img src={cover} alt="" />
      </a>
      <div className="flex justify-between mt-[10px] text-[14px]">
        <a className="font-[500]" href={websiteLink} target="_blank">
          {title}
        </a>
        <div className="text-[#428bca]">{projectType}</div>
      </div>
    </div>
  );
};

export default Webwork;
