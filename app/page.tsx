import { BrickType, BrickWrapper } from "@/components/bricks/brick-wrapper";

export default function Home() {
  const brickConfig = [
    [BrickType.Corner, BrickType.Edge, BrickType.Corner],
    [BrickType.Edge, BrickType.Flat, BrickType.Edge],
    [BrickType.Corner, BrickType.Edge, BrickType.Corner],
  ];

  return (
    <div>
      <BrickWrapper configuration={brickConfig}>Test content</BrickWrapper>
    </div>
  );
}
