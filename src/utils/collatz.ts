export type CollatzData = { x: number; y: number }[];

export default function collatzCalculator(number: number) {
  const collatzCoordArray: CollatzData = [{ x: 0, y: number }];
  let counter: number = 1;
  let highestNumber: number = number;
  do {
    number = number % 2 ? 3 * number + 1 : number / 2;
    highestNumber = number > highestNumber ? number : highestNumber;
    collatzCoordArray.push({ x: counter, y: number });
    counter++;
  } while (number > 1);
  return {
    numbers: collatzCoordArray,
    counter: counter,
    highestNumber: highestNumber,
  };
}
