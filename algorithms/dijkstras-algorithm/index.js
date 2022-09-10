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

function dijkstrasAlgorithm(graph, startKey, endKey) {
  const { costs, parents } = initHashTables(graph, startKey, endKey);
  graph.forEach((value, currentKey) => {
    console.log(`**************** currentKey ${currentKey} **************** `);
    const neighbors = graph.get(currentKey);

    if (!neighbors) {
      console.log(`node for ${neighbors} is null`);
      return;
    }

    // sort the neighbors and name it currentNeighbors
    const currentNeighbors = sortMapByValue(neighbors);

    currentNeighbors.forEach((cnValue, cnKey) => {
      console.log(
        `cnKey: ${cnKey}, cnValue: ${cnValue}-----------------------------`
      );
      console.log(graph.get(cnKey));
      const neighborNeighbors = graph.get(cnKey);

      if (!neighborNeighbors) {
        console.log(
          "the current neighbor has no neighbors! no neighborNeibors"
        );
        console.log(`costs.get(cnKey) - ${costs.get(cnKey)}`);
        return;
      }

      neighborNeighbors.forEach((nnValue, nnKey) => {
        console.log(`-------- nnKey: ${nnKey}, nnValue: ${nnValue}`);
        const costOfNNKey = costs.get(nnKey);
        console.log("costOfNNKey", costOfNNKey);
        if (!costOfNNKey) {
          costs.set(nnKey, nnValue + costs.get(cnKey));
          parents.set(nnKey, cnKey);
        } else if (costOfNNKey > nnValue + costs.get(cnKey)) {
          costs.set(nnKey, nnValue + costs.get(cnKey));
          parents.set(nnKey, cnKey);
        }

        console.log("costs", costs);
        console.log("parents", parents);
      });
    });
  });

  return {
    cost: costs.get(endKey),
    path: getPath(startKey, endKey, parents).reverse(),
  };
}

console.log(dijkstrasAlgorithm(graph, "Book", "Piano"));
