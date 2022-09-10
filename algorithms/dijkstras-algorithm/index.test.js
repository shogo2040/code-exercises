import { dijkstrasAlgorithm } from "./index";

describe("dijkstras algorithm - weighted graphs", () => {
  test("graph of book to piano test", () => {
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

    expect(dijkstrasAlgorithm(graph, "Book", "Piano")).toEqual({
      cost: 35,
      path: ["Book", "LP", "Drums", "Piano"],
    });
  });

  test("small graph of 4 nodes", () => {
    const graph = new Map();
    const start = new Map();
    const A = new Map();
    const B = new Map();
    const fin = new Map();

    A.set("fin", 1);
    B.set("A", 3);
    B.set("fin", 5);
    start.set("A", 6);
    start.set("B", 2);

    graph.set("start", start);
    graph.set("A", A);
    graph.set("B", B);
    graph.set("fin", null);

    expect(dijkstrasAlgorithm(graph, "start", "fin")).toEqual({
      cost: 6,
      path: ["start", "B", "A", "fin"],
    });
  });

  test("Graph A", () => {
    const finish = new Map();
    const D = new Map();
    const C = new Map();
    const B = new Map();
    const A = new Map();
    const start = new Map();

    const graph = new Map();

    D.set("finish", 1);
    C.set("finish", 3);
    C.set("D", 6);
    B.set("A", 8);
    B.set("D", 7);
    A.set("B", 8);
    start.set("A", 5);
    start.set("B", 2);

    graph.set("start", start);
    graph.set("A", A);
    graph.set("B", B);
    graph.set("C", C);
    graph.set("D", D);
    graph.set("finish", finish);
    graph.set("finish", null);

    expect(dijkstrasAlgorithm(graph, "start", "finish")).toEqual({
      cost: 10,
      path: ["start", "B", "D", "finish"],
    });
  });
});
