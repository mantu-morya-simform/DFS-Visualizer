import { btnClickStatus, graph, type btnType } from "../constants/gameData";
import { visualizeBtnElement } from "../dom/domElement";
import { calcDFS } from "./calcDFS";

export function handleClickVisualize() {
  visualizeBtnElement?.addEventListener("click", () => {
    if (!btnClickStatus.isSrcBtnEnable || !btnClickStatus.isDestBtnEnable) {
      alert("Please Select Source And Destination First");
      return;
    }
    fillColor(btnClickStatus.srcIndex, btnClickStatus.destIndex);
  });
}

function fillColor(
  srcIndex: btnType["srcIndex"],
  destIndex: btnType["destIndex"],
) {
  calcDFS(srcIndex, destIndex, graph);
}
