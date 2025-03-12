import React from "react";

interface IBottomRightCornerComplexBrick {
  color: string;
}

// It says complex, but the complex part was using the polygon
// NOT usable due to subpixel rendering issue
export const BottomRightCornerComplexBrick = ({
  color,
}: IBottomRightCornerComplexBrick) => {
  return (
    <div className={`flex flex-1 justify-center`}>
      <div className={`flex flex-1 relative h-[80%] ${color}`}>
        <div className="absolute -bottom-3 w-full h-full flex gap-3 pl-3">
          <div className={`flex-1 ${color}`}></div>
          <div className={`flex-1 ${color}`}></div>
          <div className={`flex-1 rounded-br-2xl ${color}`}></div>
        </div>
      </div>
    </div>
  );
};
