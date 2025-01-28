const sum = (array: number[]): number => {  
  return array.reduce((sum, curr) => sum += curr, 0);
}

console.log("simple sum: ", sum([1, 2, 3, 4]));

const sumRecursive = (array: number[]): number => {
	let total = 0;
  
  if (array.length === 0) {
  	return total;
  } else {
  	total += +array.splice(0, 1);
  	return total + sumRecursive(array);
  }
}

console.log("sum recursive: ", sumRecursive([1, 2, 3, 4]));

interface ListNode {
  value: number;
  next: ListNode | null;
}

const sumLinkedList = (list: ListNode): number => {
  let sum = 0;
    
  if (!list.next) {
    return sum + list.value;
  } else {
    return sum += list.value + sumLinkedList(list.next);
  }
};

const findMaxValue = (list: ListNode): number => {
	let maxValue = list.value;
  
  if (!list.next) {
    return maxValue;
  } else {
  	return maxValue = Math.max(list.value, findMaxValue(list.next))
  }
};

const list = {
  head: {
    value: 1,
    next: {
      value: 2,                                             
      next: {
        value: 3,
        next: {
          value: 4,
          next: null    
        },
      },
    },
  },
};

console.log("sum of linked list: ", sumLinkedList(list.head));
console.log("max value in linked list: ", findMaxValue(list.head));

const binarySearchRecursive = (list: number[], item: number): number | string => {
  let low = 0;
  let high = list.length - 1;
  let mid = Math.round((low + high) / 2);
  let guess = list[mid];
  
  if (list.length <= 1 && guess !== item) return "no number";
  
  if (guess === item) {
    return mid;
  } else if (guess > item) {
    return binarySearchRecursive(list.splice(low, mid), item);
  } else {
    return binarySearchRecursive(list.splice(mid, high), item);
  }
}

const array = [1, 3, 5, 7, 9];

console.log("recursive binary search with number: ", binarySearchRecursive(array, 3));
console.log("recursive binary search without number: ", binarySearchRecursive(array, -1));

const quickSort = (array: number[]): number[] => {
  if (array.length < 2) {
    return array;
  } else {
    const pivot = array[0];
    const less = array.filter((item) => item < pivot);
    const greater = array.filter((item) => item > pivot);
    
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
}

console.log("quick sort: ", quickSort([10, 5, 2, 3]));