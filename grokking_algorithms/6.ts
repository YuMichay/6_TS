const graph = {
  "you": ["alice", "bob", "claire"],
  "bob": ["anuj", "peggy"],
  "alice": ["peggy"],
  "claire": ["tom", "johnny"],
  "anuj": [],
  "peggy": [],
  "tom": [],
  "johnny": []
};

const checkMangoSeller = (person: string) => {
  return person[person.length - 1] === "m";
}

const breadthSearch = (name: string): string => {
  const searchQueue: string[] = [name, ...graph[name]];
  const searchedNames: string[] = [];
  
  while(searchQueue.length) {
    const person = searchQueue.shift() as string;
    
    if (searchedNames.indexOf(person) === -1) {
      const isMangoSeller = checkMangoSeller(person);
      
      if (isMangoSeller) {
        return `${person} is mango seller!`;
      } else {
        searchedNames.push(person);
        searchQueue.push(...graph[person]);
      }
    }
  }
  return "No mango seller";
};

console.log("breadth search with you: ", breadthSearch("you"));
console.log("breadth search with tom: ", breadthSearch("tom"));
console.log("breadth search with anuj: ", breadthSearch("anuj"));