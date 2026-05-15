import { gridSize, visualDelay } from "../constants/gameData";
import { gridElement } from "../dom/domElement";
import type { btnType } from "../type/btmType";
import type { graphType } from "../type/graphType";

export function calcDFS(
  srcIndex: btnType["srcIndex"],
  destIndex: btnType["destIndex"],
  graph: graphType,
) {
  const visited = new Set<string>();

  //extract destKey
  const destKey = `${destIndex.row}-${destIndex.col}`;

  function dfs(row: number, col: number): boolean {
    //extract currKey
    const currentKey = `${row}-${col}`;

    // already visited
    if (visited.has(currentKey)) return false;

    //add currenct key In visited List
    visited.add(currentKey);

    let index = row * gridSize + col; //find the index of the currenct key from row and col
    const cell = gridElement?.children[index]; // find the index element from the gridElement
    let isWall = Boolean(cell?.getAttribute("data-is-wall")); // match with his attribute if it is wall or not
    if (isWall) return false; // if current element is wall then return

    fillColor(index); //fill color
    // destination found
    if (currentKey === destKey) {
      return true;
    }

    const neighbors = graph[currentKey] || []; //find neighbors

    for (const neighbor of neighbors) {
      const [nextRow, nextCol] = neighbor.split("-").map(Number); //split the string and convert as Number

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
