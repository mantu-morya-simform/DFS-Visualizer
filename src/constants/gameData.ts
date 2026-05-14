export const GRID_SIZE = 50;
interface graphType {
  [key: string]: string[];
}

export const graph: graphType = {};
export const btnClickStatus = {
  isSrcBtnEnable: false,
  isDestBtnEnable: false,
  srcIndex: 0,
  destIndex: 0,
};
