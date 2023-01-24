import React, { useState } from "react";

const Card = ({ cover, title, navigation }) => {
  const [titleShown, setTitleShown] = useState(false);

  const handleTitleShown = () => {
    setTitleShown(!titleShown);
  };

  return (
    <div
      className="relative flex justify-center items-center mb-[15px] w-[100%] aspect-video overflow-hidden cursor-pointer translate-y-2"
      onMouseEnter={handleTitleShown}
      onMouseLeave={handleTitleShown}
      onClick={navigation}
    >
      <img
        src={cover}
        alt=""
        className={`m-auto object-cover ${
          titleShown === false ? "opacity-100" : "opacity-90"
        }`}
      />
      <div
        className={`absolute px-[5px] py-[3px] bg-white text-[18px] font-[500]  ${
          titleShown === false ? "hidden" : "block"
        }`}
      >
        {title}
      </div>
    </div>
  );
};

export default Card;
