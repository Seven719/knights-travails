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
  if (start[0] === end[0] && start[1] === end[1]) {
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

const checkNextPositions = (currentPosition, currentPath, queue, visited) => {
  for (const move of directions) {
    const nextPosition = [
      currentPosition[0] + move[0],
      currentPosition[1] + move[1],
    ];

    if (
      nextPosition[0] >= 0 &&
      nextPosition[0] < 8 &&
      nextPosition[1] >= 0 &&
      nextPosition[1] < 8 &&
      !visited.has(nextPosition.toString())
    ) {
      visited.add(nextPosition.toString());
      queue.push([...currentPath, nextPosition]);
    }
  }
};

export default knightMoves;
