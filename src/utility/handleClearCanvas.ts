import {
  btnClickStatus,
  clearBtn,
  visualDelay,
  visualizeBtn,
} from "../constants/gameData";

import {
  clearCanvasBtnElement,
  gridElement,
  visualizeBtnElement,
} from "../dom/domElement";

export function handleClearCanvas() {
  // Set initial clear button state
  clearCanvasBtnElement!.disabled = !clearBtn.isEnable;

  // Add click event to clear button
  clearCanvasBtnElement?.addEventListener("click", () => {
    // Stop if clear button is disabled
    if (!clearBtn.isEnable) return;

    // Get all grid cells
    const cells = gridElement?.querySelectorAll(".cell");

    // Reset source selection
    btnClickStatus.isSrcBtnEnable = false;

    // Reset destination selection
    btnClickStatus.isDestBtnEnable = false;

    // Reset source position
    btnClickStatus.srcIndex.row = 0;
    btnClickStatus.srcIndex.col = 0;

    // Reset destination position
    btnClickStatus.destIndex.row = 0;
    btnClickStatus.destIndex.col = 0;

    // Reset animation delays
    visualDelay.pathDelay = 0;
    visualDelay.visitedDelay = 0;

    // Enable visualize button again
    visualizeBtn.isEnable = true;
    visualizeBtnElement!.disabled = !visualizeBtn.isEnable;

    // Remove all visualization classes
    cells?.forEach((cell) => {
      cell.classList.remove("visited", "path", "src", "dest");
    });
  });
}
