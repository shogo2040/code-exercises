import { breadthFirstSearch } from "./index";

describe("breadth first search - graphs", () => {
  const graph = new Map();

  graph.set("A", {
    isMangoSeller: false,
    friends: ["B"],
  });

  graph.set("B", {
    isMangoSeller: false,
    friends: ["X", "Z"],
  });

  graph.set("me", {
    isMangoSeller: false,
    friends: ["B", "D"],
  });

  graph.set("D", {
    isMangoSeller: false,
    friends: ["W", "E", "U"],
  });

  graph.set("E", {
    isMangoSeller: false,
    friends: [],
  });

  graph.set("U", {
    isMangoSeller: false,
    friends: [],
  });

  graph.set("W", {
    isMangoSeller: false,
    friends: [],
  });

  graph.set("X", {
    isMangoSeller: false,
    friends: ["Y"],
  });

  graph.set("Y", {
    isMangoSeller: true,
    friends: [],
  });

  graph.set("Z", {
    isMangoSeller: false,
    friends: [],
  });

  const graphNoManguSeller = new Map();

  graphNoManguSeller.set("A", {
    isMangoSeller: false,
    friends: ["B"],
  });

  graphNoManguSeller.set("B", {
    isMangoSeller: false,
    friends: ["X", "Z"],
  });

  graphNoManguSeller.set("me", {
    isMangoSeller: false,
    friends: ["B", "D"],
  });

  graphNoManguSeller.set("D", {
    isMangoSeller: false,
    friends: ["W", "E", "U"],
  });

  graphNoManguSeller.set("E", {
    isMangoSeller: false,
    friends: [],
  });

  graphNoManguSeller.set("U", {
    isMangoSeller: false,
    friends: [],
  });

  graphNoManguSeller.set("W", {
    isMangoSeller: false,
    friends: [],
  });

  graphNoManguSeller.set("X", {
    isMangoSeller: false,
    friends: ["Y"],
  });

  graphNoManguSeller.set("Y", {
    isMangoSeller: false,
    friends: [],
  });

  graphNoManguSeller.set("Z", {
    isMangoSeller: false,
    friends: [],
  });

  test("existing mangoSeller in hashtable", () => {
    expect(breadthFirstSearch("me", graph)).toEqual({
      isMangoSeller: true,
      friends: [],
    });
  });

  test("no mangoSellers in hashtable", () => {
    expect(breadthFirstSearch("me", graphNoManguSeller)).toBe(undefined);
  });
});
