A playground for the BrickWrapper component

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Implementation details

### Assumptions

The `BrickWrapper` component should be flexible enough to allow for brick placement on any edge or corner, with multiple shapes (e.g. the top edge might have multiple shape spanning from left to right) and colors. Those should be customizable by the consumer.

The background should look like one big piece with and only the edges should contain special elements. Example:

```
(------------)
|   Hello    |
|   World    |
(------------)
```

In the layout above, the special elements can be corners (marked by `"("` and `")"`), or edges (marked by `"-"` and `"|"`). The interior of the element will be a solid color with no border to simulate smaller bricks pieced together. As a side note, this code be down, but would require a lot more on the implementation part

```
Discussion point

To achieve the above result, one approach could be to take the height and width of an element, calculate its area, and then have an algorithm which can split it and add lines where the bricks would join?
```

The `BrickWrapper` component should be responsive and adapt to 3 types of screens: mobile device, tablet, and desktop. (the requirement is to be usable on any size, but I would argue that handling the case where the user makes the browser window as small as possible is not the scope of this component)

### Potential solutions

In an ideal scenario, the consumer should be able to create their own shape of bricks, but that would introduce a lot of edge case scenarios. For the first iteration, it would be easier to manually define a set of brick shapes from which the consumer can choose when using the `BrickWrapper` component.

The plan is to create and manage a grid of elements that is displayed in the background of the wrapped component. This grid will behave like a matrix, where each element can be one of the following:

- A brick shape if it is located on the edge of the matrix
- A solid color if it is located inside the matrix

When using the `BrickWrapper` component, the consumer should send a static configuration for the brick placement. The initial idea is to send 4 arrays for each edges, and 4 separate elements for the corners (meaning that the edge array would exclude the corners, or, if the corner configuration exists, it would overwrite the one from the edge array).

The obvious problem to this approach is that when the viewport changes, the static configuration might no longer have enough room to be displayed on the screen. This is where the assumption related to the screen sizes comes into places: basically, the consumer will be asked to provide 3 types of configurations - small, medium, and large - which will be used accordingly based on the available space on the screen.

```
Discussion point.

The ideal case would have the consumer pass some kind of dynamic configuration that adjusts based on the size of the screen. This means that columns would be removed or added dynamically. A simple solution to this would be to provide a repeatable pattern for an edge (make the same brick shape from start to finish), but the tradeoff for this is that we can no longer combine shapes on an edge.
```

As for the approaches, there are two problems that need to be tackled: first, there is the creation of the bricks in different shapes, and second, there is the creation and management of the background as a whole.

#### 1. Brick shape creation

##### 1.1 SVG approach

This is not the scope of the component, but handling the brick creation with SVGs or 3rd party libraries that use it (such as D3.js) would lower the complexity of the brick creation.

##### 1.2 CSS approach (chosen solution)

Nothing too fancy here. Just using `div` elements with borders of different configurations to simulate the "bumps" of the brick piece. Instead of manually writing the CSS, I have used the Tailwind CSS framework to help with development speed.

#### 2 Background creation and management

##### 2.1 Logical matrix (chosen solution)

Split the background into a logical matrix behind the scenes. Each cell will be represented in the DOM by a `div` element. Cells inside the matrix will be a solid color. Cells on the edge of the matrix will be a `Brick` component or a solid color.

Bricks can be of two types: `Edge`, or `Corner`. `Edge` can be used on both edge and corner positions, while `Corner` can be used only on the corner position.

The consumer will provide a configuration as follows:
(initial idea)

```
{
  topEdge: [0, 0, 0, 3, 0],
  bottomEdge: [0, 2, 0, 0, 0],
  topRightCorner: 4
}
```

(actual implementation)

```
[
  [1, 0, 0, 2, 5],
  [3, 0, 0, 0, 4],
  [0, 0, 0, 0, 4],
  [3, 0, 0, 0, 0],
  [6, 0, 8, 8, 0],
]
```

The numbers will be mapped to an enum so we know what type of brick to render. If a configuration property is missing (such as `rightEdge` in the case above), it will be considered as a solid color.

##### 2.2 CSS Grid

This solution is similar to the one above, but instead of using a logical matrix, we would be using the CSS Grid system.

<s>I imagine this would be the better solution for the ideal case - where columns would be added dynamically based on the space available - but unless we find a formula for the dynamic configuration, this approach cannot easily be used with static configurations.</s>

Initial assumption was not correct. I think the CSS Grid could've been used with the current implementation as well.

### Possible improvements

- Common `Brick` component - maybe it lessens the need for code duplication, but on the other side it also makes it harder to define custom bricks
- UI inconsistencies caused by pixel calculations
  - fixed by manually defining brick shapes
  - other potential fixes: use margin: -1px in the direction where the piece joins with another piece to "hide" the white line
- Brick protrusion position can be made fixed - this would need clearer specs (dimensions for sm, md, lg)
- Update `BrickWrapper` so that it accepts a configuration similar to the first one mentioned above, thus lowering code repetition for unneeded bricks (but depending on business needs, the current configuration might actually be necessary)
- Color per brick instead of color per entire component
