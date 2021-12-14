import { read, stringToInt } from "../util";

export default function day9() {
  const data = read("./test.txt", 9)
    .split("\n")
    .map((line) => line.split("").map(stringToInt));

  const xMin = 0;
  const yMin = 0;
  const yMax = data.length;

  function depthIfLowest(depth, x, y) {
    const rowAbove = x - 1 > xMin ? data[x - 1] : undefined;
    const row = data[x];
    const rowBeneath = x + 1 > yMax ? data[x + 1] : undefined;

    const res = [
      rowAbove && rowAbove[y - 1],
      rowAbove && rowAbove[y],
      rowAbove && rowAbove[y + 1],
      row && row[y - 1],
      row && row[y + 1],
      rowBeneath && rowBeneath[y - 1],
      rowBeneath && rowBeneath[y],
      rowBeneath && rowBeneath[y + 1],
    ];

    return res
      .filter((val) => val >= 0)
      .every((surroundingValue) => surroundingValue > depth)
      ? depth
      : undefined;
  }

  const r = data.map(
    (line, y) => line.map((depth, x) => depthIfLowest(depth, x, y))
    // .reduce((p, c) => (parseInt(c, 10) >= 0 ? p + (c + 1) : p), null)
  );

  const res = r;
  console.log(res);
  return res;
}

day9();
