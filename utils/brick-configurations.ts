import { BrickType } from "@/components/bricks/brick-wrapper";

export const brickConfig = [
  [
    BrickType.CornerTLComplex,
    BrickType.HorizontalEdge,
    BrickType.Flat,
    BrickType.Flat,
    BrickType.CornerTRSimple,
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
    BrickType.Flat,
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
    BrickType.CornerBLSimple,
    BrickType.BottomSimple,
    BrickType.Flat,
    BrickType.BottomSimple,
    BrickType.CornerBRSimple,
  ],
];

export const loremIpsumBrickConfig = [
  [
    BrickType.Flat,
    BrickType.HorizontalEdge,
    BrickType.HorizontalEdge,
    BrickType.Corner,
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
    BrickType.CornerComplex,
  ],
];

export const guitaristBrickConfig = [
  [BrickType.Flat, BrickType.Flat, BrickType.Corner],
  [BrickType.VerticalEdge, BrickType.Flat, BrickType.VerticalEdge],
  [BrickType.Corner, BrickType.Flat, BrickType.CornerComplex],
];
