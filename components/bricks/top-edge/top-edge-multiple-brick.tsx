import React from "react";

interface ITopEdgeMultipleBrick {
  color: string;
  rotate: string;
}

// This component simply uses a container div positioned absolute with a flex positioning system
// which contains other 3, smaller, divs that are spaced out evenly with a gap between them
// Simulating the "-_-_-" brick
export const TopEdgeMultipleBrick = ({
  color,
  rotate,
}: ITopEdgeMultipleBrick) => {
  return (
    <div className={`flex flex-1 justify-center ${rotate}`}>
      <div className={`flex flex-1 relative ${color}`}>
        <div className="absolute -top-3 w-full h-full flex gap-3 pl-1 pr-1">
          <div className={`flex-1 ${color}`}></div>
          <div className={`flex-1 ${color}`}></div>
          <div className={`flex-1 ${color}`}></div>
        </div>
      </div>
    </div>
  );
};
