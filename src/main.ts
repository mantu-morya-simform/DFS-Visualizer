import { handleClearCanvas } from "./utility/handleClearCanvas";
import { handleClickSourceDist } from "./utility/handleClickSourceDist";
import { handleClickVisualize } from "./utility/handleClickVisualize";
import { init } from "./utility/init";
import { selectAlgo } from "./utility/selectAlgo";

/**
 * @description initialize the grid
 */

init();

/**
 * handle dropdown to select algo
 */
selectAlgo();

/**
 * @description handle click source and dest
 */
handleClickSourceDist();

/**
 * @description handle click visualization
 */

handleClickVisualize();

/**
 * @description handle clear canvas
 */
handleClearCanvas();
