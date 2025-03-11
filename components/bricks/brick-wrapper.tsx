import { CornerBrick } from "./corner/corner-brick";
import { CornerComplexBrick } from "./corner/corner-complex-brick";
import { HorizontalEdgeBrick } from "./horizontal-edge/horizontal-edge-brick";
import { VerticalEdgeBrick } from "./vertical-edge/vertical-edge-brick";
import { getRotation } from "@/utils/utils";

// When adding a new brick type, this enum should be updated
// Afterwards, the new brick type should be added to the switch statement in BrickWrapper
export enum BrickType {
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
  const rotation = getRotation(rowIndex, colIndex, rows, columns);
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
