const lookForKey = (mainBox: string[][]): void => {
  const mainBoxCopy = [...mainBox];
  
  while(mainBoxCopy.length) {
  	const box = mainBoxCopy.pop();
    box!.forEach((item) => {
      if (item === "key") {
        console.log("Found the key (simple search)!");
        return;
      }
    });
  }
}

const lookForKeyRecursive = (boxes: string[][]): void => {
	if (!boxes.length) return console.log("No key");
  
	const boxesCopy = [...boxes];
  
 	for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].includes("key")) {
      return console.log("Found the key (recursive)!");
    } else if (!boxes[i].includes("key") && boxes.length) {
    	boxesCopy.splice(i, 1);
      return lookForKeyRecursive(boxesCopy);
    } else {
    	return console.log("No key (recursive)");
    }
  }
}

const boxes = [["photo", "letters"], ["books"], ["book", "key", "diary"], ["magazines"]];

lookForKey(boxes);
lookForKeyRecursive(boxes);

const factorial = (x: number): number => {
	if (x === 1) return 1
  else return x * factorial(x - 1);
}

console.log("factorial: ", factorial(5));