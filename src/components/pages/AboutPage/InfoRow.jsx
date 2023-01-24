import React from "react";

const InfoRow = ({ title, subtitle, year }) => {
  return (
    <>
      <div className="flex gap-[10px] justify-between items-center mt-[10px]">
        <div className="text-[12px] font-[500]">{title}</div>
        <div className="text-[10px] font-[300]">{year}</div>
      </div>
      <div className="text-[12px] font-[300]">{subtitle}</div>
    </>
  );
};

export default InfoRow;
