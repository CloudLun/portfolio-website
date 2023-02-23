import React from "react";

import { projectData } from "../../../data/data";

import Header from "../../Header";
import ProjectContent from "./ProjectContent";
import ProjectFooter from "./ProjectFooter";

const californiaData = projectData[0];

const California = () => {
  return (
    <>
      <Header selectedPage={"main"} />
      <ProjectContent
        title={californiaData["title"]}
        subtitle={californiaData["subtitle"]}
        link={californiaData["websiteLink"]}
        contributor={californiaData["contributor"]}
        year={"2022"}
        projectType="Data Visualization"
      >
        <p className="mb-[35px]">
          The project was designed to visualize the picture of incarceration
          trends in California. The perpectives include jail and prison, women,
          and racial disparities. Also, users can deep down to counties levels
          to look through the circumstances of local incarceration. Through
          exploring how incarcerationvaries across California with different
          angles, users are able to examine how the jails have been used over
          time.
        </p>
      </ProjectContent>
      <div>
        <img src={californiaData["cover"]} alt="" className="" />
        <img src={californiaData["img01"]} alt="" className="my-[35px]" />
        <img src={californiaData["img02"]} alt="" className="my-[35px]" />
        <img src={californiaData["img03"]} alt="" className="my-[35px]" />
      </div>
      <ProjectFooter index={3} />
    </>
  );
};

export default California;
