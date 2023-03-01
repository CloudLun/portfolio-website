import React, { useState } from "react";

const Card = ({ cover, title, navigation, projectType, websiteLink }) => {
  const [titleShown, setTitleShown] = useState(false);

  const handleTitleShown = () => {
    setTitleShown(!titleShown);
  };

  return (
    <div
      className="mb-[15px] overflow-hidden cursor-pointer hover:translate-y-[-10px]"
      onClick={navigation && navigation}
    >
      <img src={cover} alt="" className="cover" />
      <div className="flex justify-between mt-[10px] text-[12px]">
        <div className="font-[500]">{title}</div>
        <div className="text-[#ff0317]">{projectType}</div>
      </div>
    </div>
  );
};

export default Card;
