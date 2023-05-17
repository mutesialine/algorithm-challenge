/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 3
export default function findLargestNumber(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return undefined;
  }
  let largest = numbers[0];
  for (let number of numbers) {
    if (number > largest) {
      largest = number;
    }
  }
  return largest;
}
