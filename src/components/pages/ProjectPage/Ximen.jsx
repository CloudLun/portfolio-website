import React from "react";

import { projectData } from "../../../data/data";

import Header from "../../Header";
import ProjectContent from "./ProjectContent";
import ProjectFooter from "./ProjectFooter";

const ximenData = projectData[2];
const Ximen = () => {
  return (
    <>
      <Header selectedPage={"main"} />
      <ProjectContent
        title={ximenData["title"]}
        subtitle={ximenData["subtitle"]}
        link={ximenData["websiteLink"]}
        contributor={ximenData["contributor"]}
        year={"2022"}
        projectType="Data Visualization"
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
      </ProjectContent>
      <div className="">
        <img src={ximenData["img01"]} alt="" className="" />
        <img src={ximenData["img02"]} alt="" className="my-[35px]" />
        <img src={ximenData["img03"]} alt="" className="my-[35px]" />
      </div>
      <ProjectFooter index={2} />
    </>
  );
};

export default Ximen;
