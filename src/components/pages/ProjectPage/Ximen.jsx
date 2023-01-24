import React from "react";

import { projectData } from "../../../data/data";

import Header from "../../Header";
import ProjectContent from "./ProjectContent";
import ProjectFooter from "./ProjectFooter";

const ximenData = projectData[1];
const Ximen = () => {
  return (
    <>
      <Header selectedPage={"main"} />
      <ProjectContent
        title={ximenData["title"]}
        subtitle={ximenData["subtitle"]}
        link={ximenData["githubLink"]}
      >
        <p className="mb-[35px]">
          COVID-19 has seriously impacted the Ximen shopping district. To help
          the district weather the storm, the team built up the solution by
          clarifying the current situation and developing the mapping
          visualization and commercial strategy suggestion. Based on the data of
          open resources, geography POI, and data from mobile devices, we built
          the interactive mapping website as an analytic tool for communicating
          with the public and commercial groups. Hoping this tool could assist
          the district or community to develop a more precise marketing plan in
          order to have a more thorough preparation in the post-pandemic era.
        </p>
        <div className="">
          <img src={ximenData["cover"]} alt="" className="" />
          <img src={ximenData["banner"]} alt="" className="my-[35px]" />
        </div>
      </ProjectContent>
      <ProjectFooter index={1} />
    </>
  );
};

export default Ximen;
