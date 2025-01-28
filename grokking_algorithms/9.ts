const findSubStr = (wordFirst: string, wordSecond: string): string => {
  let maxLength = 0;
  let endIndex = 0;
  const table: number[][] = Array.from({ length: wordFirst.length + 1 }, () => Array(wordSecond.length + 1).fill(0));
  
  for (let i = 1; i <= wordFirst.length; i++) {
    for (let j = 1; j <= wordSecond.length; j++) {
      if (wordFirst[i - 1] === wordSecond[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1;
        
        if (table[i][j] > maxLength) {
          maxLength = table[i][j];
          endIndex = i;
        }
      }
    } 
  }
  return wordFirst.slice(endIndex - maxLength, endIndex);
}

console.log("find similar string between fish and fosh: ", findSubStr("fish", "fosh"));
console.log("find similar string between fish and vista: ", findSubStr("fish", "vista"));
console.log("find similar string between blue and clues: ", findSubStr("blue", "clues"));
console.log("find similar string between cucumber and november: ", findSubStr("cucumber", "november"));