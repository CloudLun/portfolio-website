import React from "react";

import { projectData } from "../../../data/data";

import Header from "../../Header";
import ProjectContent from "./ProjectContent";
import ProjectFooter from "./ProjectFooter";

const genderData = projectData[1];

const GenderTerm = () => {
  return (
    <>
      <Header selectedPage={"main"} />
      <ProjectContent
        title={genderData["title"]}
        subtitle={genderData["subtitle"]}
        link={genderData["websiteLink"]}
        contributor={genderData["contributor"]}
        year={'2022'}
        projectType={'Data Visualization'}
      >
        <p className="">
          Knowing the importance of how language could be used to fight for
          gender equality, the UN woman creates a gender-inclusive lexicon that
          includes 650 terms to promote a gender-friendly context and
          environment. Being interested in the idea and word database, I tempted
          to convert the static lexicon to interactive infographics in order to
          let users be able to search or learn the words effecitvely. The
          project is divided into three sections. The first one is for checking
          the terms which are categorized by the alphabet. The second part is
          creating the search area, so users can take the initiative to check if
          the words are included in the lexicon. The last part is to examin how
          many gender-friendly terms are inside thearticles, paragraphs, and
          speeches, so we can know how these terms are being used in certain
          kinds of contexts.
        </p>
      </ProjectContent>
      <div className="">
        <img src={genderData["cover"]} alt="" className="" />
        <img src={genderData["img01"]} alt="" className="my-[35px]" />
        <img src={genderData["img02"]} alt="" className="" />
      </div>
      <ProjectFooter index={1} />
    </>
  );
};

export default GenderTerm;
