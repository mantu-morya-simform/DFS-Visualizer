import { graph, GRID_SIZE } from "../constants/gameData";
import { gridElement } from "../dom/domElement";

export function init() {
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      let cell = document.createElement("p");
      cell?.classList.add("cell");
      /**
       * store position
       */
      cell.dataset.row = String(row);
      cell.dataset.col = String(col);
      gridElement?.appendChild(cell);

      /**
       * create graph node
       */
      const node = `${row}-${col}`;
      graph[node] = [];
      /**
       * directions
       */
      const directions = [
        [-1, 0], // up
        [1, 0], // down
        [0, -1], // left
        [0, 1], // right
      ];

      /**
       * add neighbors
       * example : 0-0 => ["1-0", "0-1"]
       */
      directions.forEach(([dx, dy]) => {
        const newRow = row + dx;
        const newCol = col + dy;

        const isValid =
          newRow >= 0 &&
          newRow < GRID_SIZE &&
          newCol >= 0 &&
          newCol < GRID_SIZE;

        if (isValid) {
          graph[node].push(`${newRow}-${newCol}`);
        }
      });
    }
  }
  console.log(graph);
}
