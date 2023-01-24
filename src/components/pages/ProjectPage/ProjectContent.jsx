import React from "react";

const ProjectContent = ({ title, subtitle, link, children }) => {
  return (
    <>
      <div className="mt-[125px]">
        <p className="mb-[10px] text-[28px] font-[600] tracking-wide">
          {title}
        </p>
        <p className="font-[500]">{subtitle}</p>
        <div className="my-[35px] px-[6px] py-[8px] w-[200px] hover:bg-black text-center font-[600]  hover:text-white border-[2px] border-black rounded-3xl cursor-pointer">
          <a href={link} target="_blank">
            INTERACTIVE WEBSITE
          </a>
        </div>
        <div className="mb-[30px] leading-loose">{children}</div>
      </div>
    </>
  );
};

export default ProjectContent;
