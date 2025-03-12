import React from "react";

interface IRightEdgeSingleBrick {
  color: string;
  rotate: string;
}

export const RightEdgeSingleBrick = ({
  color,
  rotate,
}: IRightEdgeSingleBrick) => {
  return (
    <div className={`flex flex-1 justify-center ${rotate}`}>
      <div className={`flex flex-1 relative ${color}`}>
        <div
          className={`absolute -right-1.4 top-1/2 transform -translate-x-1/2 w-3 h-3 ${color}`}
        ></div>
      </div>
    </div>
  );
};
