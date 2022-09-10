// Graph (an abstract data structure)
// dijkstrasAlgorithm

const graph = new Map();
const book = new Map();
const lp = new Map();
const poster = new Map();
const guitar = new Map();
const drums = new Map();

book.set("LP", 5);
book.set("Poster", 0);

lp.set("Guitar", 15);
lp.set("Drums", 20);

poster.set("Guitar", 30);
poster.set("Drums", 35);

guitar.set("Piano", 20);

drums.set("Piano", 10);

graph.set("Book", book);
graph.set("LP", lp);
graph.set("Poster", poster);
graph.set("Guitar", guitar);
graph.set("Drums", drums);
graph.set("Piano", null);

// const graph2 = new Map([
//   ["Book", book],
//   ["LP", lp],
//   ["Poster", poster],
//   ["Guitar", guitar],
//   ["Drums", drums],
//   ["Piano", null],
// ]);

function dijkstrasAlgorithm(graph, startKey, endKey) {
  const startHashTable = graph.get(startKey);
  const costs = new Map();
  const parents = new Map();

  startHashTable.forEach((value, key) => {
    costs.set(key, value);
    parents.set(key, startKey);
  });

  costs.set(endKey, Infinity);
  parents.set(endKey, "");

  graph.forEach((value, currentKey) => {
    let processedKeys = [];

    const node = graph.get(currentKey);
    if (!node) {
      console.log(`node for ${currentKey} is null`);
      return;
    }

    let keyWithSmallestWeight = getKeyWithSmallestWeight(node, processedKeys);

    while (!processedKeys.includes(keyWithSmallestWeight)) {
      // <------ wrong currentKey
      console.log(
        "\ngraph currentKey -------------------------------------------------",
        currentKey
      );
      console.log(
        "!processedKeys.includes(keyWithSmallestWeight)",
        !processedKeys.includes(keyWithSmallestWeight)
      );
      console.log("processedKeys", processedKeys);

      console.log("costs", costs);
      console.log("parents", parents);

      neighbors = graph.get(keyWithSmallestWeight);

      if (!neighbors) {
        return;
      }

      console.log("neighbors", neighbors);

      const [firstNeighborKey] = neighbors.keys();
      console.log("keyWithSmallestWeight", keyWithSmallestWeight);
      console.log(
        " costs.get(keyWithSmallestWeight)",
        costs.get(keyWithSmallestWeight)
      );
      console.log(
        "typeof costs.get(keyWithSmallestWeight)",
        typeof costs.get(keyWithSmallestWeight)
      );
      console.log("firstNeighborKey", firstNeighborKey);
      let lowestCost =
        costs.get(keyWithSmallestWeight) +
        graph.get(keyWithSmallestWeight).get(firstNeighborKey);
      neighbors.forEach((value, key) => {
        console.log(
          "graph.get(keyWithSmallestWeight).get(key)",
          graph.get(keyWithSmallestWeight).get(key)
        );
        const cost =
          costs.get(keyWithSmallestWeight) +
          graph.get(keyWithSmallestWeight).get(key);
        console.log(`cost ${cost} lowestCost ${lowestCost}`);
        // if (cost < lowestCost) {
        //   lowestCost = cost;
        // }
        costs.set(key, lowestCost);
        //processed.push(key);
      });

      console.log(
        "about to push to processedKeys with keyWithSmallestWeight",
        keyWithSmallestWeight
      );
      processedKeys.push(keyWithSmallestWeight);
      console.log("processedKeys after push", processedKeys);
      keyWithSmallestWeight = getKeyWithSmallestWeight(node, processedKeys);
    }
  });
}

function getKeyWithSmallestWeight(node, processedKeys) {
  let [smallestVal] = node.values();
  let [smallestKey] = node.keys();

  node.forEach((value, key) => {
    if (processedKeys.includes(key)) {
      return;
    }

    if (value < smallestVal) {
      smallestVal = value;
      smallestKey = key;
    }
  });

  console.log(`smallestKey ${smallestKey} - smallestVal ${smallestVal}`);

  return smallestKey;
}

dijkstrasAlgorithm(graph, "Book", "Piano");
