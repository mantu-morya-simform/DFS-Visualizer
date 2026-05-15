import { algo } from "../constants/gameData";
import { selectedAlgo, visualizeBtnElement } from "../dom/domElement";

export function selectAlgo() {
  selectedAlgo?.addEventListener("change", () => {
    const value = selectedAlgo?.value;

    if (value === "BFS" || value === "DFS") {
      algo.currentAlgo = value;
    }
    if (!visualizeBtnElement) return;
    visualizeBtnElement.innerText = `Visualize ${algo.currentAlgo}`;
  });
}
