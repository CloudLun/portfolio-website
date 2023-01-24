import { React } from "react";
import { useNavigate } from "react-router-dom";

import { projectData } from "../../../data/data";

import Header from "../../Header";
import Card from "./Card";
import Footer from "../../Footer";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header selectedPage={"main"} />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 mt-[100px] w-[100%]">
        {projectData.map((data, index) => {
          return (
            <Card
              key={index}
              cover={data.cover}
              title={data.title}
              navigation={() => navigate(`/${data.navigation}`)}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
