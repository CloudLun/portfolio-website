import { React } from "react";
import { useNavigate } from "react-router-dom";

import { projectData } from "../../../data/data";
import { webworkData } from "../../../data/data";

import Header from "../../Header";
import Card from "./Card";
import Webwork from "./Webwork";
import Footer from "../../Footer";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header selectedPage={"main"} />
      <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-10 my-[80px]">
        {projectData.map((data, index) => {
          return (
            <Card
              key={index}
              cover={data.cover}
              title={data.title}
              navigation={() => navigate(`/${data.navigation}`)}
              projectType={data.projectType}
            />
          );
        })}
        {webworkData.map((data, index) => {
          return (
            <Webwork
              key={index}
              cover={data.cover}
              title={data.title}
              websiteLink={data.websiteLink}
              projectType={data.projectType}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
