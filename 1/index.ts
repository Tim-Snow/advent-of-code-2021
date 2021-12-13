import { read } from "../util";

const data = JSON.parse(read("./data.json"));

export default function day1() {
  function pt1() {
    let last = data[0];
    let total = 0;

    data.forEach((num) => {
      if (num > last) {
        total++;
      }
      last = num;
    });

    return total;
  }

  function pt2() {
    let total = 0;

    const sumOfWindow = (w) => w[0] + w[1] + w[2];

    let lastWindow = [data[0], data[1], data[2]];

    data.forEach((num) => {
      const newWindow = [lastWindow[1], lastWindow[2], num];
      if (sumOfWindow(newWindow) > sumOfWindow(lastWindow)) {
        total++;
      }
      lastWindow = newWindow;
    });

    return total;
  }

  return { 1: pt1(), 2: pt2() };
}