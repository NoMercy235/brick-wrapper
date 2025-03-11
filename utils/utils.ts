export const getRotation = (
  row: number,
  col: number,
  rowLength: number,
  colLength: number
) => {
  // TOP
  if (row === 0) {
    // TOP RIGHT
    if (col === colLength - 1) {
      return "transform -scale-x-100";
    }
    // TOP LEFT + TOP EDGE
    return "";
  }

  // BOTTOM
  if (row === rowLength - 1) {
    // BOTTOM RIGHT
    if (col == colLength - 1) {
      return "transform -scale-100";
    }
    // BOTTOM LEFT + BOTTOM EDGE
    return "transform -scale-y-100";
  }

  // LEFT EDGE
  if (col === 0) return "";

  // RIGHT EDGE
  if (col === colLength - 1) return "transform -scale-x-100";

  // INTERIOR
  return "";
};
