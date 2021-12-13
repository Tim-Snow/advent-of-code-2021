import { read, stringToInt } from "../util";

export default function day7() {
  const data = read("./data_7.txt").split(",").map(stringToInt);
  const [min, max] = [Math.min(...data), Math.max(...data)];

  const triangleNumber = (num) => (num * (num + 1)) / 2;
  const distance = (from, to) => (from > to ? from - to : to - from);
  const sumDistances = (nodes, to) =>
    nodes.reduce(
      ([sum1, sum2], from) => {
        const dist = distance(from, to);
        return [sum1 + dist, sum2 + triangleNumber(dist)];
      },
      [0, 0]
    );

  const [p1, p2] = [...Array(max - min).keys()]
    .map((i) => sumDistances(data, i + min))
    .reduce(
      ([p1, p2], [c1, c2]) => [Math.min(p1, c1), Math.min(p2, c2)],
      [Infinity, Infinity]
    );

  return { 1: p1, 2: p2 };
}
