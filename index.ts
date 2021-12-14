import day1 from "./1/index";
import day2 from "./2/index";
import day3 from "./3/index";
import day4 from "./4/index";
import day5 from "./5/index";
import day7 from "./7/index";
import day8 from "./8/index";
import day9 from "./9/index";
import day13 from "./13/index";

const days = [day1, day2, day3, day4, day5, day7, day8, day9, day13];

function main() {
  days.map((day) => console.log(day()));
}

main();
