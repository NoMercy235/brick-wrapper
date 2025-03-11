import React from "react";

interface IHorizontalEdgeBrick {
  color: string;
  rotate: string;
}

export const HorizontalEdgeBrick = ({
  color,
  rotate,
}: IHorizontalEdgeBrick) => {
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
