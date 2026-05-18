import {
  algo,
  btnClickStatus,
  clearBtn,
  graph,
  visualDelay,
  visualizeBtn,
} from "../constants/gameData";

import { clearCanvasBtnElement, visualizeBtnElement } from "../dom/domElement";

import { calcBFS } from "./calcBFS";
import { calcDFS } from "./calcDFS";

export function handleClickVisualize() {
  // Add click event to visualize button
  visualizeBtnElement?.addEventListener("click", () => {
    // Stop if visualize button is disabled
    if (!visualizeBtn.isEnable) return;

    // Disable visualize button while animation runs
    visualizeBtn.isEnable = false;
    visualizeBtnElement.disabled = !visualizeBtn.isEnable;

    // Disable clear button during visualization
    clearBtn.isEnable = false;
    clearCanvasBtnElement!.disabled = !clearBtn.isEnable;

    // Check if source and destination are selected
    if (!btnClickStatus.isSrcBtnEnable || !btnClickStatus.isDestBtnEnable) {
      alert("Please Select Source And Destination First");

      // Re-enable visualize button
      visualizeBtn.isEnable = true;
      visualizeBtnElement.disabled = !visualizeBtn.isEnable;

      // Re-enable clear button
      clearBtn.isEnable = true;
      clearCanvasBtnElement!.disabled = !clearBtn.isEnable;

      return; // stop execution
    }

    // Run DFS or BFS based on selected algorithm
    const pathFound =
      algo.currentAlgo === "DFS"
        ? calcDFS(btnClickStatus.srcIndex, btnClickStatus.destIndex, graph)
        : calcBFS(btnClickStatus.srcIndex, btnClickStatus.destIndex, graph);

    // get total animation delay
    const finishDelay = visualDelay.pathDelay;

    // show alert if no path exists
    if (!pathFound) {
      setTimeout(() => {
        alert("There is not any path Present to reach to dest");
      }, finishDelay);
    }

    // enable clear button after animation ends
    setTimeout(() => {
      clearBtn.isEnable = true;
      clearCanvasBtnElement!.disabled = !clearBtn.isEnable;
    }, finishDelay);
  });

  // set initial clear button state
  if (clearCanvasBtnElement)
    clearCanvasBtnElement.disabled = !clearBtn.isEnable;
}
