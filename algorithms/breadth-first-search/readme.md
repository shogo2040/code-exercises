# Breadth First Search

## Abstract Data Structure - graphs

```
    Y
    ^
    X          W
    ^          ^
A > B < (me) > D > E
    v          v
    Z          U
```

In the ascii text diagram above:

- The **capital letters** are nodes.
- The >, ^, v, and < symbols are edges with direction specified by the pointy tip of the symbol.

Because the edges have one direction, this is called a **_directed graph_**.

Each node is represented by a key, which is a string of one character, A, B, D, E, U, W, X, Y, Z.
Use these as your key to reference an object: {
isMangoSeller: false // or true
}

1. Create the initial Hash Table for the graph, with all nodes to have:

```
{
  isMangoSeller: false
}
```

except for node with key Y to have **_isMangoSeller_** set to **true**.

2. Now add a friends prop and populate the friends array with the node that the directed edge points to:
   For example, A is friends with B as specified by A > B:

```
{
  isMangoSeller: false,
  friends: ["B"],
}
```

Use an array

3. Now write a function using breadth first search to find the node who has isMangoSeller = to true.

---

In the JavaScript folder, open a terminal and install the app with:

```bash
npm install
```

You only need to install once.

To start your daily exercises, start Jest with the following command:

```bash
npm test
```

Then open **index.js** with your favorite editor and complete the JavaScript exercises. When you have completed the exercises correctly, **Jest** will list the following:

![Jest](jest.png)
