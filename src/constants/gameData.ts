import type { algoType } from "../type/algoType";
import type { btnType } from "../type/btmType";
import type { graphType } from "../type/graphType";

export const gridSize = 50;
export const wallCount = gridSize * gridSize * 0.2;
export let visualDelay = {
  visitedDelay: 0,
  pathDelay: 0,
};

export const graph: graphType = {};

export const btnClickStatus: btnType = {
  isSrcBtnEnable: false,
  isDestBtnEnable: false,
  srcIndex: {
    row: 0,
    col: 0,
  },
  destIndex: {
    row: 0,
    col: 0,
  },
};

export const algo: algoType = {
  currentAlgo: "DFS",
};

export const visualizeBtn = {
  isEnable: true,
};
