import React from "react";

import { infoData } from "../../../data/data";

import Header from "../../Header";
import InfoRow from "./InfoRow";
import Footer from "../../Footer";

// const infoData = [
//   {
//     category: "education",
//     title: "Master of Data Visualization",
//     subtitle: "Parsons School of Design",
//     year: "09.2022 - Present",
//   },
//   {
//     category: "education",
//     title: "Bachelor of Sociology",
//     subtitle: "National ChengChi University",
//     year: "09.2013 - 01.2018",
//   },
//   {
//     category: "experience",
//     title: "Data Visualization Development Intern",
//     subtitle: "Vera Institute of Justice",
//     year: "05.2022 - 12.2022",
//   },
//   {
//     category: "experience",
//     title: "Survey & Interactive Data Visualization Designer",
//     subtitle: "IVC X Believe in Next Generation",
//     year: "10.2021 - 11.2021",
//   },
//   {
//     category: "experience",
//     title: "Research Assistant",
//     subtitle: "Owl Consulting",
//     year: "04.2020 - 06.2021",
//   },
//   {
//     category: "experience",
//     title: "Qualitative Researcher & Data Visualization Designer",
//     subtitle: "IVC X 9floor",
//     year: "07.2019 - 02.2020",
//   },
//   {
//     category: "activities",
//     title: "Frontend Developer Trainee",
//     subtitle: "Alpha Camp",
//     year: "06.2021 - 09.2021",
//   },
//   {
//     category: "activities",
//     title: "Research Workshop Trainee",
//     subtitle: "UX Taipei",
//     year: "06.2021 - 09.2021",
//   },
// ];

const AboutPage = () => {
  return (
    <>
      <Header selectedPage={"about"} />
      <div className="lg:flex lg:justify-around items-center mt-[100px] m-auto md:mt-[100px] lg:w-[70%] ">
        <div className="bg-[url('https://upload.cc/i1/2023/01/18/kHg7Lb.jpg')] bg-cover bg-top m-auto mb-[20px] lg:m-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] rounded-full">
          {/* <img className="absolute object-cover w-[250px] h-[250px] rounded-full" src="https://upload.cc/i1/2023/01/18/kHg7Lb.jpg" alt="" /> */}
        </div>
        <div>
          <div>
            <p className="mb-[10px] font-[700]">EDUCATION</p>
            {infoData.map((data, index) => {
              if (data.category === "education") {
                return (
                  <InfoRow
                    key={index}
                    title={data.title}
                    subtitle={data.subtitle}
                    year={data.year}
                  />
                );
              }
            })}
          </div>
          <div>
            <p className="mt-[25px] mb-[10px] font-[700]">EXPERIENCE</p>
            {infoData.map((data, index) => {
              if (data.category === "experience") {
                return (
                  <InfoRow
                    key={index}
                    title={data.title}
                    subtitle={data.subtitle}
                    year={data.year}
                  />
                );
              }
            })}
          </div>
          <div>
            <p className="mt-[25px] mb-[10px] font-[700]">ACTIVITIES</p>
            {infoData.map((data, index) => {
              if (data.category === "activities") {
                return (
                  <InfoRow
                    key={index}
                    title={data.title}
                    subtitle={data.subtitle}
                    year={data.year}
                  />
                );
              }
            })}
          </div>
          <div>
            <p className="mt-[25px] mb-[10px] font-[700]">SKILLS</p>
            <div className="md:flex md:justify-between">
              <div>
                <p className="text-[12px] font-[500]">Web Development</p>
                <div className="text-[12px] font-[300]">HTML/CSS</div>
                <div className="text-[12px] font-[300]">Javascript ES6</div>
                <div className="text-[12px] font-[300]">D3.js</div>
                <div className="text-[12px] font-[300]">Svelte.js</div>
                <div className="text-[12px] font-[300]">React.js</div>
              </div>
              <div className="mt-[10px] md:mt-0">
                <p className="text-[12px] font-[500]">Data Science</p>
                <div className="text-[12px] font-[300]">Pandas</div>
                <div className="text-[12px] font-[300]">QGIS</div>
                <div className="text-[12px] font-[300]">Tableau</div>
              </div>
              <div className="mt-[10px] md:mt-0">
                <p className="text-[12px] font-[500]">Design</p>
                <div className="text-[12px] font-[300]">Figma</div>
                <div className="text-[12px] font-[300]">Illustrator</div>
                <div className="text-[12px] font-[300]">InDesign</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
