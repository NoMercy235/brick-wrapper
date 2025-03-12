import { BrickType } from "@/components/bricks/brick-wrapper";

export const brickConfig = [
  [
    BrickType.TopMultiple,
    BrickType.TopMultiple,
    BrickType.TopMultiple,
    BrickType.TopMultiple,
    BrickType.TopMultiple,
    BrickType.CornerTRComplex,
  ],
  [
    BrickType.LeftSimple,
    BrickType.Flat,
    BrickType.Flat,
    BrickType.Flat,
    BrickType.RightSimple,
  ],
  [
    BrickType.LeftSimple,
    BrickType.Flat,
    BrickType.Flat,
    BrickType.Flat,
    BrickType.RightComplex,
  ],
  [
    BrickType.Flat,
    BrickType.Flat,
    BrickType.Flat,
    BrickType.Flat,
    BrickType.Flat,
  ],
  [
    BrickType.LeftSimple,
    BrickType.Flat,
    BrickType.Flat,
    BrickType.Flat,
    BrickType.RightSimple,
  ],
  [
    BrickType.LeftSimple,
    BrickType.Flat,
    BrickType.Flat,
    BrickType.Flat,
    BrickType.RightSimple,
  ],
  [
    BrickType.CornerBLSimple,
    BrickType.BottomSimple,
    BrickType.Flat,
    BrickType.BottomSimple,
    BrickType.CornerBRComplex,
  ],
];

export const loremIpsumBrickConfig = [
  [
    BrickType.Flat,
    BrickType.HorizontalEdge,
    BrickType.HorizontalEdge,
    BrickType.CornerTRSimple,
  ],
  [
    BrickType.VerticalEdge,
    BrickType.Flat,
    BrickType.Flat,
    BrickType.VerticalEdge,
  ],
  [BrickType.Flat, BrickType.Flat, BrickType.Flat, BrickType.Flat],
  [
    BrickType.VerticalEdge,
    BrickType.Flat,
    BrickType.Flat,
    BrickType.VerticalEdge,
  ],
  [
    BrickType.Corner,
    BrickType.HorizontalEdge,
    BrickType.HorizontalEdge,
    BrickType.CornerBRComplex,
  ],
];

export const smallBrickConfig = [
  [BrickType.TopMultiple, BrickType.TopMultiple],
  [BrickType.Flat, BrickType.RightComplex],
  [BrickType.CornerBLSimple, BrickType.Flat],
];

export const guitaristBrickConfig = [
  [BrickType.Flat, BrickType.TopMultiple, BrickType.Flat],
  [BrickType.Flat, BrickType.Flat, BrickType.RightComplex],
  [BrickType.CornerBLSimple, BrickType.BottomSimple, BrickType.Flat],
];

export const randomConfigForFirstElement = [
  brickConfig,
  loremIpsumBrickConfig,
  guitaristBrickConfig,
];

export const randomColors = [
  "bg-red-400",
  "bg-blue-400",
  "bg-purple-400",
  "bg-orange-400",
];
