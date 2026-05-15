import { btnClickStatus } from "../constants/gameData";
import { gridElement } from "../dom/domElement";

export function handleClickSourceDist() {
  gridElement?.addEventListener("click", (e: MouseEvent) => {
    const target = e.target;

    if (!(target instanceof HTMLElement)) return;

    if (target.tagName !== "P") return;

    if (target.getAttribute("data-is-wall")) return;

    if (!btnClickStatus.isSrcBtnEnable) {
      target.classList.add("src");
      btnClickStatus.isSrcBtnEnable = true;
      let row = Number(target.getAttribute("data-row"));
      let col = Number(target.getAttribute("data-col"));
      btnClickStatus.srcIndex.row = row;
      btnClickStatus.srcIndex.col = col;
      return;
    }
    if (!btnClickStatus.isDestBtnEnable) {
      target.classList.add("dest");
      btnClickStatus.isDestBtnEnable = true;
      let row = Number(target.getAttribute("data-row"));
      let col = Number(target.getAttribute("data-col"));
      btnClickStatus.destIndex.row = row;
      btnClickStatus.destIndex.col = col;
      return;
    }
  });
}
