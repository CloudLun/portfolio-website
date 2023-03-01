import React from "react";

import { projectData } from "../../../data/data";

import Header from "../../Header";
import ProjectContent from "./ProjectContent";
import ProjectFooter from "./ProjectFooter";

const celebrityData = projectData[4];

const Celebrity = () => {
  return (
    <>
      <Header selectedPage={"main"} />
      <ProjectContent
        title={celebrityData["title"]}
        subtitle={celebrityData["subtitle"]}
        link={celebrityData["websiteLink"]}
        contributor={celebrityData["contributor"]}
        year={"2022"}
        projectType="Data Visualization"
      >
        <p className="mb-[35px]">
          The Internet celebrity’ has become a cultural phenomenon which changes
          online behavior, especially in the younger generation. Instead of
          being fans of entertainers like actors or movie stars, they spend time
          watching popular YouTube channels. This infographic is designed to
          show types of online celebrities followed by people of different ages,
          trying to depict the importance of Internet celebrities to the younger
          generation
        </p>
      </ProjectContent>
      <div>
        <img src={celebrityData["cover"]} alt="" className="" />
        <img src={celebrityData["img01"]} alt="" className="my-[35px]" />
      </div>
      <ProjectFooter index={4} />
    </>
  );
};

export default Celebrity;
