const binarySearch = (list: number[], item: number): number | null => {
  let low = 0;
  let high = list.length - 1;
  
  while(low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    
    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

const exampleList = [1, 3, 5, 7, 9];

console.log("first example: ", binarySearch(exampleList, 3));
console.log("second example: ", binarySearch(exampleList, -1));