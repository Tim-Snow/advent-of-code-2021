export const stringToInt = (str: string) => parseInt(str, 10);

export const add = (a: number, b: number) => a + b;

export const splitStringOnNewLine = (str: string) => str.split("\n");

import * as fs from "fs";
import path from "path";
export const read = (fileName: string, day: number) =>
  fs.readFileSync(path.resolve(__dirname, day.toString(), fileName), "utf8");
