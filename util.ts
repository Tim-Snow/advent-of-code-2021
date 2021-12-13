export const stringToInt = (str) => parseInt(str, 10);

import * as fs from "fs";
export const read = (fileName) => fs.readFileSync(fileName, "utf8");
