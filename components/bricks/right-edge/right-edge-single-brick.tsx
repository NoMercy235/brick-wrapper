import React from "react";

interface IRightEdgeSingleBrick {
  color: string;
}

export const RightEdgeSingleBrick = ({ color }: IRightEdgeSingleBrick) => {
  return (
    <div className={`flex flex-1 relative justify-center ${color}`}>
      <div className="absolute -right-3 w-full h-[50%] flex">
        <div className={`flex-1 ${color}`}></div>
      </div>
    </div>
  );
};
