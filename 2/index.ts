import { read } from "../util";

const data = JSON.parse(read("./data.json"));

export default function day2() {
  function calculateDepth(d) {
    let horiz_pos = 0;
    let depth = 0;
    let aim = 0;

    d.forEach((instruction) => {
      const [direction, amount] = instruction.split(" ");

      switch (direction) {
        case "forward":
          horiz_pos += parseInt(amount);
          depth += aim * parseInt(amount);
          break;
        case "up":
          aim -= parseInt(amount);
          break;
        case "down":
          aim += parseInt(amount);
          break;
      }
    });

    return horiz_pos * depth;
  }

  return { 2: calculateDepth(data) };
}
