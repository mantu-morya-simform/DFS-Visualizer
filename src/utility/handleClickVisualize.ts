import { btnClickStatus, graph } from "../constants/gameData";
import { visualizeBtnElement } from "../dom/domElement";
import { calcDFS } from "./calcDFS";

export function handleClickVisualize() {
  visualizeBtnElement?.addEventListener("click", () => {
    if (!btnClickStatus.isSrcBtnEnable || !btnClickStatus.isDestBtnEnable) {
      alert("Please Select Source And Destination First");
      return;
    }
    let path = calcDFS(
      btnClickStatus.srcIndex,
      btnClickStatus.destIndex,
      graph,
    );

    if (!path) {
      setTimeout(() => {
        alert("There is not any path Present to reach to dest");
      }, 3000);
    }
  });
}
