import React from "react";

import { projectData } from "../../../data/data";

import Header from "../../Header";
import ProjectContent from "./ProjectContent";
import ProjectFooter from "./ProjectFooter";

const noiseData = projectData[4];

const Noise = () => {
  return (
    <>
      <Header selectedPage={"main"} />
      <ProjectContent
        title={noiseData["title"]}
        subtitle={noiseData["subtitle"]}
        link={noiseData["websiteLink"]}
        contributor={noiseData["contributor"]}
        year={"2022"}
        projectType="Data Visualization"
      >
        <p className="mb-[35px]">
          In new York City, the place that never sleeps, we could always hear
          tons of different kinds of sounds at anytime, anywhere. These
          unbearable noises blended in the New Yorkers' lives, and built up the
          unique soundscape.
          <br />
          <br />
          Trying to get more understanding of this scene, I built up the
          interactive visualization and mapping based the 311 noise complaints
          data in order to see how the trends change over months and differences
          between boros in 2021.
        </p>
      </ProjectContent>
      <div>
        <img src={noiseData["cover"]} alt="" />
        <img src={noiseData["img01"]} alt="" className="my-[35px]" />
        <img src={noiseData["img02"]} alt="" className="my-[35px]" />
        <img src={noiseData["img03"]} alt="" className="my-[35px]" />
      </div>
      <ProjectFooter index={4} />
    </>
  );
};

export default Noise;
