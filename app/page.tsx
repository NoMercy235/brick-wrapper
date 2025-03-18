"use client";

import { BrickWrapper } from "@/components/bricks/brick-wrapper";
import {
  guitaristBrickConfig,
  loremIpsumBrickConfig,
  randomColors,
  randomConfigForFirstElement,
  smallBrickConfig,
} from "@/utils/brick-configurations";
import { getRandomInt } from "@/utils/utils";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [currentConfigIndex, setCurrentConfigIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const currentConfig = randomConfigForFirstElement[currentConfigIndex];
  const currentColor = randomColors[currentColorIndex];

  const onConfigChange = () => {
    let newConfigIndex, newColorIndex;
    do {
      newConfigIndex = getRandomInt(randomConfigForFirstElement.length);
    } while (newConfigIndex == currentConfigIndex);
    do {
      newColorIndex = getRandomInt(randomColors.length);
    } while (newColorIndex == currentColorIndex);

    setCurrentConfigIndex(newConfigIndex);
    setCurrentColorIndex(newColorIndex);
  };

  return (
    <div className="flex p-4 flex-col w-3/4 mx-auto">
      <h2 className="mb-4 border-b mb-3 text-3xl leading-tight">
        Solution - Div matrix
      </h2>

      <div className="mb-10 flex">
        <button
          type="button"
          className="text-white mr-4 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-lg px-5 py-2.5"
          onClick={onConfigChange}
        >
          Change
        </button>
        <div className="flex flex-col">
          <p>Current Config index: {currentConfigIndex}</p>
          <p>Current Color: {currentColor}</p>
        </div>
      </div>

      <BrickWrapper configuration={currentConfig} color={currentColor}>
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
                <li>Add multiple brick shapes ~1.5 hours</li>
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
              </ul>
            </li>
          </ul>
        </div>
      </BrickWrapper>

      <div className="h-10"></div>

      <BrickWrapper configuration={loremIpsumBrickConfig} color="bg-blue-400">
        <p>
          <b>
            Important issue! Subpixel rendering and rounding errors due to the
            use of `transform` or `clip-path`!
          </b>
        </p>

        <p>
          This was fixed (in the element above) by manually defining bricks for
          each position, instead of using transform
        </p>

        <br />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis ex
          id tellus rutrum maximus. Quisque ut viverra nulla, eget ultrices mi.
          Cras eget dolor ut leo mattis scelerisque vitae et quam. Mauris
          faucibus metus vel elit pharetra, et gravida mauris congue.
        </p>
      </BrickWrapper>

      <div className="h-10"></div>

      <div className="w-[250px] mt-5">
        <BrickWrapper configuration={smallBrickConfig} color="bg-orange-400">
          <p>It also supports small content</p>
        </BrickWrapper>
      </div>

      <div className="h-10"></div>

      <BrickWrapper configuration={guitaristBrickConfig} color="bg-red-400">
        <p>Here is a random photo a guitarist</p>
        <Image
          alt="The guitarist in the concert."
          src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
          width={2250}
          height={1390}
        />
      </BrickWrapper>
    </div>
  );
}
