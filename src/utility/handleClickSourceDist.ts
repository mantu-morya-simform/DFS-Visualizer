import { btnClickStatus, GRID_SIZE } from "../constants/gameData";
import { gridElement } from "../dom/domElement";

export function handleClickSourceDist() {
  gridElement?.addEventListener("click", (e: MouseEvent) => {
    const target = e.target;

    if (!(target instanceof HTMLElement)) return;

    if (target.tagName !== "P") return;

    if (!btnClickStatus.isSrcBtnEnable) {
      target.classList.add("src");
      btnClickStatus.isSrcBtnEnable = true;
      let row = Number(target.getAttribute("data-row"));
      let col = Number(target.getAttribute("data-col"));
      let index = row * GRID_SIZE + col;
      btnClickStatus.srcIndex = index;
      return;
    }
    if (!btnClickStatus.isDestBtnEnable) {
      target.classList.add("dest");
      btnClickStatus.isDestBtnEnable = true;
      let row = Number(target.getAttribute("data-row"));
      let col = Number(target.getAttribute("data-col"));
      let index = row * GRID_SIZE + col;
      btnClickStatus.destIndex = index;
      return;
    }
  });
}
