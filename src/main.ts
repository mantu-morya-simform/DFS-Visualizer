import { handleClearCanvas } from "./utility/handleClearCanvas";
import { handleClickSourceDist } from "./utility/handleClickSourceDist";
import { handleClickVisualize } from "./utility/handleClickVisualize";
import { init } from "./utility/init";

/**
 * @description initialize the grid
 */

init();

handleClickSourceDist();

handleClickVisualize();

handleClearCanvas();
