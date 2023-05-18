/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 3
export default function findLargestNumber(numbers) {
  if (!Array.isArray(numbers) || !numbers.length) {
    return undefined;
  }
  //the largest number in an array
  return Math.max(...numbers);
}
