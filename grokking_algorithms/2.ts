const findSmallest = (array: number[]): number => {
  let smallest = array[0];
  let smallestIndex = 0;
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

const selectionSort = (array: number[]): number[] => {
	const copyArray = [...array];
  const newArray: number[] = [];
  
  while(copyArray.length) {
    let smallest = findSmallest(copyArray);
    newArray.push(copyArray[smallest]);
    copyArray.splice(smallest, 1);
  }
  return newArray;
}

console.log("selection sort: ", selectionSort([5, 3, 6, 2, 10]));