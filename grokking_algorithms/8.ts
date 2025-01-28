let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
const stations = {
  "kone": ["id", "nv", "ut"],
  "ktwo": ["wa", "id", "mt"],
  "kthree": ["or", "nv", "ca"],
  "kfour": ["nv", "ut"],
  "kfive": ["ca", "az"]
};

const algorithmGreedy = (): Set<string | null> => {
  const finalStations: Set<string | null> = new Set();
  
  while (statesNeeded.size > 0) {
    let bestStation: string | null = null;
    let statesCovered: Set<string | null> = new Set();
    
    for (const [station, statesForStation] of Object.entries(stations)) {
      const covered = new Set([...statesNeeded].filter(state => statesForStation.includes(state)));
      
      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }
    }
    statesNeeded = new Set([...statesNeeded].filter((state) => ![...statesCovered].includes(state)));
    finalStations.add(bestStation);
  }
  return finalStations;
}

console.log("greedy algorithm: ", algorithmGreedy());