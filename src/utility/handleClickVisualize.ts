import { btnClickStatus } from "../constants/gameData";
import { gridElement, visualizeBtnElement } from "../dom/domElement";

export function handleClickVisualize() {
  visualizeBtnElement?.addEventListener("click", () => {
    if (btnClickStatus.srcIndex > btnClickStatus.destIndex) {
      let temp = btnClickStatus.destIndex;
      btnClickStatus.destIndex = btnClickStatus.srcIndex;
      btnClickStatus.srcIndex = temp;
    }
    fillColor(btnClickStatus.srcIndex);
  });
}

function fillColor(index: number) {
  if (index === btnClickStatus.destIndex) {
    return;
  }
  const cell = gridElement?.children[index];
  cell?.classList.add("visited");
  setTimeout(fillColor, 0, index + 1);
}
