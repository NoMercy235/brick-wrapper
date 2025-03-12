import React from "react";

interface IBottomRightCornerBrick {
  color: string;
  rotate: string;
}

export const BottomRightCornerBrick = ({
  color,
  rotate,
}: IBottomRightCornerBrick) => {
  return (
    <div className={`flex flex-1 justify-center ${rotate}`}>
      <div className={`flex flex-1 relative rounded-br-2xl ${color}`}>
        <div
          className={`absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 ${color}`}
        ></div>
      </div>
    </div>
  );
};
