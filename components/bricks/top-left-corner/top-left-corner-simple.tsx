import React from "react";

interface ITopLeftCornerBrick {
  color: string;
  rotate: string;
}

export const TopLeftCornerBrick = ({ color, rotate }: ITopLeftCornerBrick) => {
  return (
    <div className={`flex flex-1 justify-center ${rotate}`}>
      <div className={`flex flex-1 relative rounded-tl-2xl ${color}`}>
        <div
          className={`absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 ${color}`}
        ></div>
      </div>
    </div>
  );
};
