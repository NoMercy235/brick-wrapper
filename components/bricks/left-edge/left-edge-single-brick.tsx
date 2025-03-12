import React from "react";

interface ILeftEdgeSingle {
  color: string;
  rotate: string;
}

export const LeftEdgeSingleBrick = ({ color, rotate }: ILeftEdgeSingle) => {
  return (
    <div className={`flex flex-1 justify-center ${rotate}`}>
      <div className={`flex flex-1 relative ${color}`}>
        <div
          className={`absolute -left-1.4 top-1/2 transform -translate-x-1/2 w-3 h-3 ${color}`}
        ></div>
      </div>
    </div>
  );
};
