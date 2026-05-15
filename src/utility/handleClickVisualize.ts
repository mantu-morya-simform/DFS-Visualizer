import {
  algo,
  btnClickStatus,
  graph,
  visualizeBtn,
} from "../constants/gameData";
import { visualizeBtnElement } from "../dom/domElement";
import { calcBFS } from "./calcBFS";
import { calcDFS } from "./calcDFS";

export function handleClickVisualize() {
  visualizeBtnElement?.addEventListener("click", () => {
    if (!visualizeBtn.isEnable) return; // if visualizeBtn not enable not allow to give access of click

    visualizeBtn.isEnable = false; // if its true then make it false cause we clicked once after clear the canvas then it allow to click

    //if src and dest btn are enable then allow to perform action
    if (!btnClickStatus.isSrcBtnEnable || !btnClickStatus.isDestBtnEnable) {
      alert("Please Select Source And Destination First");
      return;
    }

    // for check path available or not btw src and dest
    // let isPath: boolean;

    if (algo.currentAlgo === "DFS") {
      // isPath = calcDFS(
      //   btnClickStatus.srcIndex,
      //   btnClickStatus.destIndex,
      //   graph,
      // );
      calcDFS(btnClickStatus.srcIndex, btnClickStatus.destIndex, graph);
    } else {
      // isPath = calcBFS(btnClickStatus.srcIndex, btnClickStatus.destIndex, graph);
      calcBFS(btnClickStatus.srcIndex, btnClickStatus.destIndex, graph);
    }

    /**
     * @description not work properly
     */

    // if (!isPath) {
    //   setTimeout(() => {
    //     alert("There is not any path Present to reach to dest");
    //   }, 3000);
    // }
  });
}
