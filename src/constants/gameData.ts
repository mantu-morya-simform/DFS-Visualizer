export const GRID_SIZE = 50;
export let visualDelay = {
  visitedDelay: 0,
  pathDelay: 0,
};
export interface graphType {
  [key: string]: string[];
}

export type btnType = {
  isSrcBtnEnable: boolean;
  isDestBtnEnable: boolean;
  srcIndex: {
    row: number;
    col: number;
  };
  destIndex: {
    row: number;
    col: number;
  };
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
