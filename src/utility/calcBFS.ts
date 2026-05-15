import { gridSize, visualDelay } from "../constants/gameData";
import { gridElement } from "../dom/domElement";
import type { btnType } from "../type/btmType";
import type { graphType } from "../type/graphType";

export function calcBFS(
  srcIndex: btnType["srcIndex"],
  destIndex: btnType["destIndex"],
  graph: graphType,
) {
  const visited = new Set<string>(); // create a visited Set
  const queue: [number, number][] = [[srcIndex.row, srcIndex.col]]; // a queue for each level data(each child of current node)
  const destKey = `${destIndex.row}-${destIndex.col}`; // create a dest key to match with src

  while (queue.length > 0) {
    const [row, col] = queue.shift()!; // remove first element from the queue
    const currentKey = `${row}-${col}`; // create currentKey based on taken element from queue

    // if already visited then not do anything return
    if (visited.has(currentKey)) continue;
    visited.add(currentKey); // add the current key to visited to mark that element is visited not add again into queue

    const index = row * gridSize + col; // create index based on row and column
    const cell = gridElement?.children[index]; // get element by index
    const isWall = Boolean(cell?.getAttribute("data-is-wall")); //check if the attribute is there on the element ot not is there then make true to check wall
    if (isWall) continue; // if wall then return not do anything

    fillColor(index); // add class based on index

    // destination found
    if (currentKey === destKey) {
      return true; // if source and dest match it mins route found
    }

    const neighbors = graph[currentKey] || []; // get all adjencicy for the current element

    for (const neighbor of neighbors) {
      const [nextRow, nextCol] = neighbor.split("-").map(Number);
      const nextKey = `${nextRow}-${nextCol}`;

      if (!visited.has(nextKey)) {
        queue.push([nextRow, nextCol]);
      }
    }
  }
  return false;
}

function fillColor(index: number) {
  const cell = gridElement?.children[index];

  setTimeout(() => {
    cell?.classList.add("visited");
  }, visualDelay.visitedDelay);

  setTimeout(() => {
    cell?.classList.add("path");
  }, visualDelay.pathDelay);

  visualDelay.visitedDelay += 3;
  visualDelay.pathDelay += 7;
}
