import React from "react";

import { projectData } from "../../../data/data";

import Header from "../../Header";
import ProjectContent from "./ProjectContent";
import ProjectFooter from "./ProjectFooter";

const refugeeData = projectData[2];

const Refugee = () => {
  return (
    <>
      <Header selectedPage={"main"} />
      <ProjectContent
        title={refugeeData["title"]}
        subtitle={refugeeData["subtitle"]}
        link={refugeeData["githubLink"]}
        contributor={refugeeData["contributor"]}
        year={"2022"}
        projectType="Data Visualization"
      >
        <p className="mb-[35px]">
          According to the UNHCR, in 2022, global forced displacement has risen
          to 103 million. Over 70% of the global refugees under UNHCR’s mandate
          and others desperate for international protection come from just five
          countries. This interactive mapping dashboard tries to depict an
          overview of this miserable situation; The trajectories and bar charts
          show the paths and numbers of refugees originating from or heading to.
        </p>
      </ProjectContent>
      <div>
        <img src={refugeeData["cover"]} alt="" />
        <img src={refugeeData["banner"]} alt="" className="my-[35px]" />
        <img src={refugeeData["img01"]} alt="" className="my-[35px]" />
        <img src={refugeeData["img02"]} alt="" className="" />
      </div>
      <ProjectFooter index={2} />
    </>
  );
};

export default Refugee;
