import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { projectData } from "../../../data/data";

const ProjectFooter = ({ index }) => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(index);
  return (
    <div className="flex flex-wrap justify-center my-[40px] text-[16px] text-font-gray font-[600]">
      {projectData.map((data, index) => {
        return (
          <div
            key={index}
            className={`mr-[25px] ${
              index === selectedIndex ? "text-black" : "text-font-gray"
            } hover:text-black cursor-pointer`}
            onClick={(event) => {
              navigate(`/${data.navigation}`);
            }}
          >
            {data.title}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectFooter;
