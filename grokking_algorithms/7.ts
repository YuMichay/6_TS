interface GraphNode {
  [key: string]: number;
}

const graph = {
  "start": {
    "A": 6,
    "B": 2
  },
  "A": {
    "end": 1
  },
  "B": {
    "A": 3,
    "end": 5
  },
  "end": {}
};

interface Costs {
  [key: string]: number;
}
const costs = {
  "A": 6,
  "B": 2,
  "end": Infinity
};

interface Parents {
  [key: string]: string | null;
}
const parents = {
  "A": "start",
  "B": "start",
  "end": null
};

const findLowestCostNode = (costs: Costs, processed: string[]): string | null => {
  let lowestCost = Infinity;
  let lowestCostNode: string | null = null;
  for(let node in costs) {
    const cost = costs[node];
    if(cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

interface AlgorithmD {
  costs: Costs;
  parents: Parents;
}
const algorithmD = (): AlgorithmD => {
  const processed: string[] = [];
  let node: string | null = findLowestCostNode(costs, processed);
  
  while(node !== null) {
    const cost: number = costs[node];
    const neighbors: GraphNode = graph[node];
    const neighborsKeys = Object.keys(neighbors);
    
    for(let key of neighborsKeys) {
      const newCost = cost + neighbors[key];

      if (costs[key] > newCost) {
        costs[key] = newCost;
        parents[key] = node;
      }
    }
    
    processed.push(node);
    node = findLowestCostNode(costs, processed);
  }
  
  return { costs, parents };
}

console.log("algorithm dijkstra: ", algorithmD());