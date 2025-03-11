import React from "react";

interface IEdgeBrick {
  color: string;
}

export const EdgeBrick = ({ color }: IEdgeBrick) => {
  return (
    <div className="flex gap-1 justify-center">
      <div className={`relative w-10 h-6 ${color}`}>
        <div
          className={`absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 ${color}`}
        ></div>
      </div>
    </div>
  );
};
