// Graph (an abstract data structure)
// dijkstrasAlgorithm

function initHashTables(graph, startKey, endKey) {
  const startHashTable = graph.get(startKey);
  const costs = new Map();
  const parents = new Map();

  startHashTable.forEach((value, key) => {
    costs.set(key, value);
    parents.set(key, startKey);
  });

  costs.set(endKey, Infinity);
  parents.set(endKey, "");

  return {
    costs,
    parents,
  };
}

function sortMapByValue(map) {
  // sorts in ascending order / smallest to largest
  return new Map([...map.entries()].sort((a, b) => a[1] - b[1]));
}

function getPath(startKey, key, parents) {
  if (key === startKey) {
    return [startKey];
  } else {
    return [key, ...getPath(startKey, parents.get(key), parents)];
  }
}

export function dijkstrasAlgorithm(graph, startKey, endKey) {
  const { costs, parents } = initHashTables(graph, startKey, endKey);
  graph.forEach((value, currentKey) => {
    const neighbors = graph.get(currentKey);

    if (!neighbors) {
      return;
    }

    // sort the neighbors and name it currentNeighbors
    // because the shortest path ir processed first
    const currentNeighbors = sortMapByValue(neighbors);

    currentNeighbors.forEach((cnValue, cnKey) => {
      const neighborNeighbors = graph.get(cnKey);

      if (!neighborNeighbors) {
        return;
      }

      neighborNeighbors.forEach((nnValue, nnKey) => {
        const costOfNNKey = costs.get(nnKey);

        if (!costOfNNKey) {
          costs.set(nnKey, nnValue + costs.get(cnKey));
          parents.set(nnKey, cnKey);
        } else if (costOfNNKey > nnValue + costs.get(cnKey)) {
          costs.set(nnKey, nnValue + costs.get(cnKey));
          parents.set(nnKey, cnKey);
        }
      });
    });
  });

  return {
    cost: costs.get(endKey),
    path: getPath(startKey, endKey, parents).reverse(),
  };
}
