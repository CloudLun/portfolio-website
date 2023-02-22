import React from "react";
// mt-[150px] mb-[120px]
const ProjectContent = ({
  title,
  subtitle,
  link,
  children,
  year,
  projectType,
  contributor,
}) => {
  return (
    <div className="md:flex flex-col md:justify-between mt-[125px] mb-[200px] md:h-[720px]">
      <div className="md:flex">
        <div className="md:w-[50%]">
          <p className="mt-0 mb-[10px] text-[28px] font-[600] tracking-wide">
            {title}
          </p>
          <p className="font-[500]">{subtitle}</p>
        </div>
        <div className="mt-[80px] font-[600] md:m-0">
          <p>{year}</p>
          <p>{projectType}</p>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:order-2 font-[600] mt-[40px] mb-[80px] md:m-0">
          {contributor.map((data, index) => {
            return (
              <div key={index} className="mb-[3px] md:mb-[5px]">
                <p>{data}</p>
              </div>
            );
          })}
        </div>
        <div className="md:order-1 mb-[80px] md:m-0 w-[50%] ">
          <div className="px-[6px] py-[8px] w-[200px] hover:bg-black text-center font-[600]  hover:text-white border-[2px] border-black rounded-3xl cursor-pointer">
            <a href={link} target="_blank">
              INTERACTIVE WEBSITE
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-[45%]">{children}</div>
    </div>
  );
};

export default ProjectContent;
