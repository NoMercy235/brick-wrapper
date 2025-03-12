import React from "react";

import classes from "./top-right-corner.module.css";

interface ITopRightCornerComplexBrick {
  color: string;
}

export const TopRightCornerComplexBrick = ({
  color,
}: ITopRightCornerComplexBrick) => {
  return (
    <div className={`flex flex-1 justify-center`}>
      <div className={`flex flex-1 relative ${color}`}>
        <div className="absolute -top-3 w-full h-[25%] flex gap-3 pl-3">
          <div className={`flex-1 ${classes.clipBody} ${color}`}></div>
          <div className={`flex-1 ${classes.clipBody} ${color}`}></div>
          <div className={`flex-1 rounded-tr-2xl ${color}`}></div>
        </div>
      </div>
    </div>
  );
};
