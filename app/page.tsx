"use client";

import { BrickWrapper } from "@/components/bricks/brick-wrapper";
import {
  brickConfig,
  guitaristBrickConfig,
  loremIpsumBrickConfig,
} from "@/utils/brick-configurations";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex p-4 flex-col w-3/4 mx-auto">
      <h2 className="mb-4 border-b pb-4 text-3xl leading-tight">
        Solution - Div matrix
      </h2>

      <BrickWrapper configuration={brickConfig} color="bg-purple-400">
        <div>
          <p>
            This solution uses a logical matrix where each cell is a div
            element. The consumer provides a configuration which specifies how
            the bricks should be placed.
          </p>
          <ul className="m-3 max-w-md space-y-1 list-disc">
            <li>
              Time:
              <ul className="max-w-md space-y-1 list-disc list-inside">
                <li>Documentation and play testing ~1.5 hours</li>
                <li>Implementation ~3 hours</li>
              </ul>
            </li>
            <li>
              Pros:
              <ul className="max-w-md space-y-1 list-disc list-inside">
                <li>
                  Each cell can hold any kind of brick (can be modified to
                  accept different colors for specific bricks)
                </li>
                <li>
                  Static configuration means that the wrapper can have various
                  shapes, based on the needs, and it can even use animations, if
                  needed, for interactions (falling bricks maybe?)
                </li>
                <li>
                  Responsive, since each cell is inside the flexbox display
                  system
                </li>
              </ul>
            </li>
            <li>
              Cons:
              <ul className="max-w-md space-y-1 list-disc list-inside">
                <li>Verbose configuration</li>
                <li>Brick protrusion placement is not fixed (when resizing)</li>
                <li>
                  Potential performance issues when rendering a large number of
                  bricks
                </li>
                <li>
                  <b>
                    Subpixel rendering and rounding errors due to the use of
                    `transform`!!!
                  </b>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </BrickWrapper>

      <div className="h-10"></div>

      <BrickWrapper configuration={loremIpsumBrickConfig} color="bg-blue-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis ex
        id tellus rutrum maximus. Quisque ut viverra nulla, eget ultrices mi.
        Cras eget dolor ut leo mattis scelerisque vitae et quam. Mauris faucibus
        metus vel elit pharetra, et gravida mauris congue.
      </BrickWrapper>

      <div className="h-10"></div>

      <p>It also supports small content</p>
      <div className="w-min mt-1">
        <BrickWrapper
          configuration={guitaristBrickConfig}
          color="bg-orange-400"
        >
          Small
        </BrickWrapper>
      </div>

      <div className="h-10"></div>

      <BrickWrapper configuration={guitaristBrickConfig} color="bg-red-400">
        <p>
          Here is a random photo. Notice the flat corner in the upper left part
          of the photo
        </p>
        <Image
          alt="The guitarist in the concert."
          src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
          width={2250}
          height={1390}
          layout="responsive"
        />
      </BrickWrapper>
    </div>
  );
}
