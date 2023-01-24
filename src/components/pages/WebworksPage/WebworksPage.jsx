import React from "react";

import { webworksData } from "../../../data/data";

import Header from "../../Header";
import Webwork from "./Webwork";

const WebworksPage = () => {
  return (
    <>
      <Header selectedPage={"webworks"} />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3 my-[100px]">
        {webworksData.map((data, index) => {
          return <Webwork key={index} title={data.title} img={data.img} link={data.link} githubLink={data.githubLink}/>;
        })}
      </div>
    </>
  );
};

export default WebworksPage;
