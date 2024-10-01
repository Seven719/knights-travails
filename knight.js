const directions = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

const knightMoves = (start, end) => {
  if (start >= 0 && start < 8 && end >= 0 && end < 8) {
    console.log("You made it in 0 moves. Here's your path: ");
    console.log(start);
    return;
  }

  const path = findShortestPath(start, end, directions);

  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  path.forEach((position) => console.log(position));
};
