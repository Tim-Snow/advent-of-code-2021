import data from "./data.json";

export default function day3() {
  const binToDec = (bin: string) => parseInt(bin, 2);
  const multBinNums = (...nums: string[]) =>
    binToDec(nums[0]) * binToDec(nums[1]);
  const isOne = (val: string) => val === "1";
  const oppositeBinVal = (val: string) => (isOne(val) ? "0" : "1");
  const doNothing = (val: any) => val;

  function mostCommonBitAtIndex(
    data: string[],
    index: number,
    transform = doNothing
  ) {
    const ones = data.map((bits) => bits.charAt(index)).filter(isOne);
    const zeroes = data.length - ones.length;
    return transform(zeroes > ones.length ? "0" : "1");
  }

  function getGammaEpsilon(data: string[]) {
    let gamma = "";
    let epsilon = "";

    for (let i = 0; i < data[0].length; i++) {
      const most = mostCommonBitAtIndex(data, i);
      gamma += most;
      epsilon += oppositeBinVal(most);
    }

    return [gamma, epsilon];
  }

  function findRemainingItem(
    data: string[],
    transform = doNothing,
    index = 0
  ): string {
    const filtered = data.filter(
      (v: string) =>
        v.charAt(index) === mostCommonBitAtIndex(data, index, transform)
    );

    if (filtered.length > 1) {
      return findRemainingItem(filtered, transform, index + 1);
    }

    return filtered[0];
  }

  const oxygenGeneratorRating = findRemainingItem(data);
  const c02ScrubberRating = findRemainingItem(data, oppositeBinVal);

  const res = {
    1: multBinNums(...getGammaEpsilon(data)),
    2: multBinNums(oxygenGeneratorRating, c02ScrubberRating),
  };
  console.log(res);
  return res;
}

day3();
