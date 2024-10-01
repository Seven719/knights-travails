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

  const path = findShortestPath(start, end);

  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  path.forEach((position) => console.log(position));
};

const findShortestPath = (start, end) => {
  const queue = [[start]];

  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const currentPath = queue.shift();
    const currentPosition = currentPath[currentPath.length - 1];

    if (currentPosition[0] === end[0] && currentPosition[1] === end[1])
      return currentPath;

    checkNextPositions(currentPosition, currentPath, queue, visited);
  }
};
