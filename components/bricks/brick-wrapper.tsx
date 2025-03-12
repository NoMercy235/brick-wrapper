import { CornerBrick } from "./_deprecated/corner/corner-brick";
import { CornerComplexBrick } from "./_deprecated/corner/corner-complex-brick";
import { HorizontalEdgeBrick } from "./_deprecated/horizontal-edge/horizontal-edge-brick";
import { VerticalEdgeBrick } from "./_deprecated/vertical-edge/vertical-edge-brick";
import { BottomEdgeSingleBrick } from "./bottom-edge/bottom-edge-single-brick";
import { BottomLeftCornerBrick } from "./bottom-left-corner/bottom-left-corner-simple";
import { BottomRightCornerComplexBrick } from "./bottom-right-corner/bottom-right-corner-complex";
import { BottomRightCornerBrick } from "./bottom-right-corner/bottom-right-corner-simple";
import { LeftEdgeSingleBrick } from "./left-edge/left-edge-single-brick";
import { RightEdgeComplexBrick } from "./right-edge/right-edge-complex-brick";
import { RightEdgeSingleBrick } from "./right-edge/right-edge-single-brick";
import { TopEdgeMultipleBrick } from "./top-edge/top-edge-multiple-brick";
import { TopEdgeSingleBrick } from "./top-edge/top-edge-single-brick";
import { TopLeftCornerComplexBrick } from "./top-left-corner/top-left-corner-complex";
import { TopLeftCornerBrick } from "./top-left-corner/top-left-corner-simple";
import { TopRightCornerComplexBrick } from "./top-right-corner/top-right-corner-complex";
import { TopRightCornerBrick } from "./top-right-corner/top-right-corner-simple";
import { getRotation } from "@/utils/utils";

// When adding a new brick type, this enum should be updated
// Afterwards, the new brick type should be added to the switch statement in BrickWrapper
export enum BrickType {
  TopSimple,
  TopMultiple,
  RightSimple,
  RightComplex,
  BottomSimple,
  LeftSimple,
  CornerTLSimple,
  CornerTLComplex,
  CornerTRSimple,
  CornerTRComplex,
  CornerBLSimple,
  CornerBRSimple,
  CornerBRComplex,
  HorizontalEdge,
  VerticalEdge,
  Corner,
  CornerComplex,
  Flat,
}

type BrickMatrix = BrickType[][];

interface IBrickWrapper {
  children: React.ReactNode;
  configuration: BrickMatrix;
  // This supports one color for all bricks, but it can be modified to accept different colors for specific bricks
  // In that case, a cell inside the `configuration` property should be an object with a `type` and a `color` property
  color: string;
}

const renderBrick = (
  brickType: BrickType,
  rowIndex: number,
  colIndex: number,
  rows: number,
  columns: number,
  color: string
) => {
  // This code was left to demonstrate the subpixel rendering issue
  let rotation = "";
  if (
    [BrickType.Corner, BrickType.HorizontalEdge, BrickType.VerticalEdge].find(
      (el) => el == brickType
    )
  ) {
    rotation = getRotation(rowIndex, colIndex, rows, columns);
  }

  switch (brickType) {
    case BrickType.Corner:
      return <CornerBrick key={colIndex} rotate={rotation} color={color} />;
    case BrickType.HorizontalEdge:
      return (
        <HorizontalEdgeBrick key={colIndex} rotate={rotation} color={color} />
      );
    case BrickType.CornerComplex:
      return (
        <CornerComplexBrick key={colIndex} rotate={rotation} color={color} />
      );
    case BrickType.VerticalEdge:
      return (
        <VerticalEdgeBrick key={colIndex} rotate={rotation} color={color} />
      );
    case BrickType.CornerTLSimple:
      return (
        <TopLeftCornerBrick key={colIndex} rotate={rotation} color={color} />
      );
    case BrickType.CornerTLComplex:
      return <TopLeftCornerComplexBrick key={colIndex} color={color} />;
    case BrickType.CornerTRSimple:
      return (
        <TopRightCornerBrick key={colIndex} rotate={rotation} color={color} />
      );
    case BrickType.CornerTRComplex:
      return <TopRightCornerComplexBrick key={colIndex} color={color} />;
    case BrickType.CornerBLSimple:
      return <BottomLeftCornerBrick key={colIndex} color={color} />;
    case BrickType.CornerBRSimple:
      return <BottomRightCornerBrick key={colIndex} color={color} />;
    case BrickType.CornerBRComplex:
      return <BottomRightCornerComplexBrick key={colIndex} color={color} />;
    case BrickType.TopSimple:
      return (
        <TopEdgeSingleBrick key={colIndex} rotate={rotation} color={color} />
      );
    case BrickType.TopMultiple:
      return (
        <TopEdgeMultipleBrick key={colIndex} rotate={rotation} color={color} />
      );
    case BrickType.RightSimple:
      return <RightEdgeSingleBrick key={colIndex} color={color} />;
    case BrickType.RightComplex:
      return <RightEdgeComplexBrick key={colIndex} color={color} />;
    case BrickType.BottomSimple:
      return (
        <BottomEdgeSingleBrick key={colIndex} rotate={rotation} color={color} />
      );
    case BrickType.LeftSimple:
      return (
        <LeftEdgeSingleBrick key={colIndex} rotate={rotation} color={color} />
      );
    case BrickType.Flat:
      return <div key={colIndex} className={`flex-1 ${color}`}></div>;
  }
};

export const BrickWrapper = ({
  children,
  configuration,
  color,
}: IBrickWrapper) => {
  return (
    <div className="relative flex justify-center items-center p-3">
      <div className="absolute flex flex-col z-[-1] w-full h-full">
        {configuration.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-1 min-h-[1rem]">
            {row.map((brickType, colIndex) => {
              return renderBrick(
                brickType,
                rowIndex,
                colIndex,
                configuration.length,
                row.length,
                color
              );
            })}
          </div>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
};
