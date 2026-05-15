import {
  GRID_SIZE,
  visualDelay,
  type btnType,
  type graphType,
} from "../constants/gameData";
import { gridElement } from "../dom/domElement";

export function calcDFS(
  srcIndex: btnType["srcIndex"],
  destIndex: btnType["destIndex"],
  graph: graphType,
) {
  const visited = new Set<string>();

  const destKey = `${destIndex.row}-${destIndex.col}`;

  function dfs(row: number, col: number): boolean {
    const currentKey = `${row}-${col}`;

    // already visited
    if (visited.has(currentKey)) return false;

    visited.add(currentKey);

    fillColor(row * GRID_SIZE + col);

    // destination found
    if (currentKey === destKey) {
      return true;
    }

    const neighbors = graph[currentKey] || [];

    for (const neighbor of neighbors) {
      const [nextRow, nextCol] = neighbor.split("-").map(Number);

      if (dfs(nextRow, nextCol)) {
        return true;
      }
    }

    return false;
  }

  return dfs(srcIndex.row, srcIndex.col);
}

function fillColor(index: number) {
  const cell = gridElement?.children[index];

  setTimeout(() => {
    cell?.classList.add("visited");
  }, visualDelay.visitedDelay);

  setTimeout(() => {
    cell?.classList.add("path");
  }, visualDelay.pathDelay);

  visualDelay.visitedDelay += 3; // increase delay 5 ms each time after adding class to a cell
  visualDelay.pathDelay += 7; // increase delay 5 ms each time after adding class to a cell
}
