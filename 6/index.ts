import { read, stringToInt } from "../util";

type Days = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export function day6() {
  function loadData() {
    return read("data.txt", 6)
      .split(",")
      .map((v) => parseInt(v, 10) as Days)
      .reduce(
        (p, c, i) => {
          const before = p.slice(0, c);
          const cur = p[c];
          const after = p.slice(c + 1);
          return [...before, cur + 1, ...after];
        },
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      );
  }

  function simulateDay(data: number[]) {
    const birthing = data.shift() || 0;
    return [
      data[0],
      data[1],
      data[2],
      data[3],
      data[4],
      data[5],
      data[6] + birthing,
      data[7],
      birthing,
    ];
  }

  function* run() {
    let data = loadData();
    let iter = 0;

    while (iter < 256) {
      data = simulateDay(data);
      iter++;
      if (iter === 80) {
        yield data.reduce((p, c) => p + c, 0);
      }
    }

    yield data.reduce((p, c) => p + c, 0);
  }

  const runner = run();

  return { 1: runner.next().value, 2: runner.next().value };
}

console.log(day6());
