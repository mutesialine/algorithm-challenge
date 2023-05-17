/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 2
export default function processItems(items) {
  if (!items || !Array.isArray(items)) {
    throw new Error("Expected an array of items.");
  }
  const processedItems = [];
  for (const item of items) {
    if (item.type === "Food") {
      processedItems.push(item);
    }
  }
  return processedItems;
}
