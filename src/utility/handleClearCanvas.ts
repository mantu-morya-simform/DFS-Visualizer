import { btnClickStatus, visualDelay } from "../constants/gameData";
import { clearCanvasBtnElement, gridElement } from "../dom/domElement";

export function handleClearCanvas() {
  clearCanvasBtnElement?.addEventListener("click", () => {
    const cells = gridElement?.querySelectorAll(".cell");
    btnClickStatus.isSrcBtnEnable = false;
    btnClickStatus.isDestBtnEnable = false;
    btnClickStatus.srcIndex.row = 0;
    btnClickStatus.srcIndex.col = 0;
    btnClickStatus.destIndex.row = 0;
    btnClickStatus.destIndex.col = 0;
    visualDelay.pathDelay = 0;
    visualDelay.visitedDelay = 0;
    cells?.forEach((cell) => {
      cell.classList.remove("visited", "path", "src", "dest");
    });
  });
}
