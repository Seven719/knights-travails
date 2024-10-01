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
  if (arePositionsEqual(start, end)) {
    console.log("You made it in 0 moves. Here's your path: ");
    console.log(start);
    return;
  }

  const path = findShortestPath(start, end);

  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  path.forEach((position) => console.log(position));
};

const arePositionsEqual = (pos1, pos2) => {
  return pos1[0] === pos2[0] && pos1[1] === pos2[1];
};

const isValidPosition = ([x, y]) => {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
};

const findShortestPath = (start, end) => {
  const queue = [[start]];

  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const currentPath = queue.shift();
    const currentPosition = currentPath[currentPath.length - 1];

    if (arePositionsEqual(currentPosition, end)) return currentPath;

    checkNextPositions(currentPosition, currentPath, queue, visited);
  }
};

const checkNextPositions = (currentPosition, currentPath, queue, visited) => {
  for (const move of directions) {
    const nextPosition = [
      currentPosition[0] + move[0],
      currentPosition[1] + move[1],
    ];

    if (
      isValidPosition(nextPosition) &&
      !visited.has(nextPosition.toString())
    ) {
      visited.add(nextPosition.toString());
      queue.push([...currentPath, nextPosition]);
    }
  }
};

export default knightMoves;
