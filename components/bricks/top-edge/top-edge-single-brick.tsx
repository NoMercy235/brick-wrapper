import React from "react";

interface ITopEdgeSingleBrick {
  color: string;
  rotate: string;
}

export const TopEdgeSingleBrick = ({ color, rotate }: ITopEdgeSingleBrick) => {
  return (
    <div className={`flex flex-1 justify-center ${rotate}`}>
      <div className={`flex flex-1 relative ${color}`}>
        <div
          className={`absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 ${color}`}
        ></div>
      </div>
    </div>
  );
};
