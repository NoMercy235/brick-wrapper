import React from "react";

interface IRightEdgeComplexBrick {
  color: string;
}

export const RightEdgeComplexBrick = ({ color }: IRightEdgeComplexBrick) => {
  return (
    <div className={`flex flex-1 justify-center `}>
      <div className={`flex flex-1 relative ${color}`}>
        <div className="absolute -right-3 w-full h-full flex flex-col gap-3 pt-1 pb-1">
          <div className={`flex-[2] rounded-tr-2xl ${color}`}></div>
          <div className={`flex-[2] rounded-br-2xl ${color}`}></div>
        </div>
      </div>
    </div>
  );
};
