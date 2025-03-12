import React from "react";

interface ITopLeftCornerComplexBrick {
  color: string;
  rotate: string;
}

export const TopLeftCornerComplexBrick = ({
  color,
  rotate,
}: ITopLeftCornerComplexBrick) => {
  return (
    <div className={`flex flex-1 justify-center ${rotate}`}>
      <div className={`flex flex-1 relative ${color}`}>
        <div
          className={`absolute -top-1.5 left-1/3 transform -translate-x-1/3 w-3 h-3 ${color}`}
        ></div>
        <div
          className={`absolute -top-1.5 left-2/3 transform -translate-x-1/3 w-3 h-3 ${color}`}
        ></div>
        <div
          className={`absolute -top-1.5 transform w-5 h-3 rounded-tl-xl ${color}`}
        ></div>
      </div>
    </div>
  );
};
