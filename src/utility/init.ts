import { graph, gridSize, wallCount } from "../constants/gameData";
import { gridElement } from "../dom/domElement";

export function init() {
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
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
      directions.forEach(([x, y]) => {
        const newRow = row + x;
        const newCol = col + y;

        const isValid =
          newRow >= 0 && newRow < gridSize && newCol >= 0 && newCol < gridSize;

        if (isValid) {
          graph[node].push(`${newRow}-${newCol}`);
        }
      });
    }
  }

  //create wall and append into grid
  for (let i = 0; i < wallCount; i++) {
    const randomIdx = Math.floor(Math.random() * gridSize * gridSize);

    const cell = gridElement?.children[randomIdx];

    if (!(cell instanceof HTMLElement)) return;

    if (!cell.classList.contains("wall")) {
      cell.classList.add("wall");
      cell.dataset.isWall = "true";
    }
  }
}
