import React from "react";

import { projectData } from "../../../data/data";

import Header from "../../Header";
import ProjectContent from "./ProjectContent";
import ProjectFooter from "./ProjectFooter";

const coLivingData = projectData[5];

const CoLiving = () => {
  return (
    <>
      <Header selectedPage={"main"} />
      <ProjectContent
        title={coLivingData["title"]}
        subtitle={coLivingData["subtitle"]}
        link={coLivingData["websiteLink"]}
        contributor={coLivingData["contributor"]}
        year={"2020"}
        projectType="Data Visualization"
      >
        <p className="mb-[35px]">
          Co-living spaces have become an appealing living option for young
          generations in recent years. The rising housing price makes urban
          dwellers harder to own an affordable and comfortable living
          environment. Moreover, due to the atomistic society structure and the
          digitization, the younger generation feel more lonely than before.
          <br/><br/>
          Consequently, the co-living model becomes the alternative solution to
          previous issues. This magazine book starts from a collaborative
          research with the co-living brand “9floor” in Taipei to understand the
          motivation and the urban lifestyle of current co-living residents.
          Building upon the research findings, the design proposal is a
          prototype that envisions the new future collective living. Through the
          living combination of different groups of people, their lifestyles and
          the chemistry between their characteristics, the co-living space could
          connect not just the members within the interior but the neighborhood,
          or even the entire city.
        </p>
      </ProjectContent>
      <div>
        <img src={coLivingData["img01"]} alt="" className="" />
        <img src={coLivingData["img02"]} alt="" className="my-[35px]" />
        <img src={coLivingData["img03"]} alt="" className="my-[35px]" />
      </div>
      <ProjectFooter index={5} />
    </>
  );
};

export default CoLiving;
