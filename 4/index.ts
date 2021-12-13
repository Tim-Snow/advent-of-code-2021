import { read } from "../util";

export default function day4() {
  function loadData() {
    let numbers = undefined;
    let grids = [];
    let iter = -1;
    let innerIter = 0;
    const data = read("./data.txt");

    data.split("\n").forEach((line) => {
      if (!numbers) {
        return (numbers = line.split(",").map((num) => parseInt(num, 10)));
      }

      if (line.length === 0) {
        innerIter = 0;
        iter += 1;
        grids[iter] = [];
        return;
      }

      grids[iter][innerIter] = line
        .trim()
        .split(/\s+/)
        .map((num) => ({ value: parseInt(num), state: 0 }));
      innerIter += 1;
    });

    return { numbers, grids };
  }

  const isComplete = (colObjs) => colObjs.every((colObj) => colObj.state === 1);
  const getColumnValuesForIndex = (grid, i) => grid.map((rows) => rows[i]);

  function calculateFinalValue(grid, lastNumber) {
    const sumUnmarked = grid
      .flatMap((row) => row.filter((col) => col.state === 0))
      .map((v) => v.value)
      .reduce((p, c) => p + c, 0);

    return sumUnmarked * lastNumber;
  }

  function getTurnsToWin(grid, numbers) {
    let iterations = 0;
    for (const number of numbers) {
      for (const row of grid) {
        let colI = 0;
        for (const col of row) {
          if (col.value === number) {
            col.state = 1;
          }

          if (
            isComplete(getColumnValuesForIndex(grid, colI)) ||
            isComplete(row)
          ) {
            return {
              iterations,
              grid,
              number,
            };
          }

          colI++;
        }
      }

      iterations++;
    }
  }

  function pt1() {
    const { numbers, grids } = loadData();

    const lowest = grids
      .map((grid) => getTurnsToWin(grid, numbers))
      .sort((a, b) => a.iterations - b.iterations)[0];

    return calculateFinalValue(lowest.grid, lowest.number);
  }

  function pt2() {
    const { numbers, grids } = loadData();

    const highest = grids
      .map((grid) => getTurnsToWin(grid, numbers))
      .sort((a, b) => b.iterations - a.iterations)[0];

    return calculateFinalValue(highest.grid, highest.number);
  }

  return { 1: pt1(), 2: pt2() };
}
