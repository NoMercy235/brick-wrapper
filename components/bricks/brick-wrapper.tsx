import { CornerBrick } from "./corner/corner-brick";
import { EdgeBrick } from "./edge/edge-brick";

export enum BrickType {
  Edge,
  Corner,
  Flat,
}

type BrickMatrix = BrickType[][];

interface IBrickWrapper {
  children: React.ReactNode;
  configuration: BrickMatrix;
}

export const BrickWrapper = ({ children, configuration }: IBrickWrapper) => {
  return (
    <div className="relative flex gap-1 justify-center items-center p-3">
      <div className="absolute w-full h-full flex flex-col z-[-1]">
        {configuration.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row h-full">
            {row.map((brickType, brickIndex) => {
              switch (brickType) {
                case BrickType.Corner:
                  return <CornerBrick key={brickIndex} color="bg-red-800" />;
                case BrickType.Edge:
                  return <EdgeBrick key={brickIndex} color="bg-red-800" />;
                case BrickType.Flat:
                  return (
                    <div
                      key={brickIndex}
                      className="flex-1 h-full bg-red-800"
                    ></div>
                  );
              }
            })}
          </div>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
};
