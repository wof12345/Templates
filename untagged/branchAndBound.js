import PriorityQueue from "./priorityqueue.js";
let N = 3;
let states = [];
// state space tree nodes
let Node = {
  // stores the parent node of the current node
  // helps in tracing path when the answer is found
  parent: 0,

  // stores matrix
  mat: [],

  // stores blank tile coordinates
  x: 0,
  y: 0,

  // stores the number of misplaced tiles
  cost: -1,

  // stores the number of moves so far
  level: 0,
};

function swap(space, oldCor, newCor) {
  let temp = space[oldCor[0]][oldCor[1]];
  space[oldCor[0]][oldCor[1]] = space[newCor[0]][newCor[1]];
  space[newCor[0]][newCor[1]] = temp;
}

// Function to print N x N matrix
function printMatrix(mat) {
  let row = "";
  for (let i = 0; i < N; i++) {
    row += "\n";
    for (let j = 0; j < N; j++) {
      row += mat[i][j] + " ";
    }
  }
  console.log(row);
}

// Function to allocate a new node
function newNode(mat, x, y, newX, newY, level, parent) {
  // set pointer for path to root
  Node.parent = parent;

  // copy data from parent node to current node
  Node.mat = [...mat];

  // move tile by 1 position
  swap(Node.mat, [x, y], [newX, newY]);

  // set number of misplaced tiles
  Node.cost = Number.MAX_SAFE_INTEGER;

  // set number of moves so far
  Node.level = level;

  // update new blank tile coordinates
  Node.x = newX;
  Node.y = newY;

  return Node;
}

// bottom, left, top, right
let row = [1, 0, -1, 0];
let col = [0, -1, 0, 1];

// Function to calculate the number of misplaced tiles
// ie. number of non-blank tiles not in their goal position
function calculateCost(initial, final) {
  let count = 0;
  for (let i = 0; i < N; i++)
    for (let j = 0; j < N; j++)
      if (initial[i][j] && initial[i][j] != final[i][j]) count++;
  return count;
}

// Function to check if (x, y) is a valid matrix coordinate
function isSafe(x, y) {
  return x >= 0 && x < N && y >= 0 && y < N;
}

// print path from root node to destination node
// function printPath(Node=Node.root)
// {
//     if (root == NULL)
//         return;
//     printPath(root.parent);
//     printMatrix(root.mat);

//     printf("\n");
// }

// Comparison object to be used to order the heap
// struct comp
// {
//     bool operator()(const Node* lhs, const Node* rhs) const
//     {
//         return (lhs.cost + lhs.level) > (rhs.cost + rhs.level);
//     }
// };

// Function to solve N*N - 1 puzzle algorithm using
// Branch and Bound. x and y are blank tile coordinates
// in initial state
function solve(initial, x, y, final) {
  // Create a priority queue to store live nodes of
  // search tree;
  let pqForLiveNodes = new PriorityQueue();

  // create a root node and calculate its cost
  let root = newNode(initial, x, y, x, y, 0, null);
  printMatrix(root.mat);
  printMatrix(final);
  root.cost = calculateCost(initial, final);
  console.log(root);

  // Add root to list of live nodes;
  pqForLiveNodes.push(root);

  // Finds a live node with least cost,
  // add its childrens to list of live nodes and
  // finally deletes it from the list.

  while (!pqForLiveNodes.isEmpty()) {
    // Find a live node with least estimated cost
    let min = pqForLiveNodes.front().element;
    console.log("pq : ", min);
    // The found node is deleted from the list of
    // live nodes
    pqForLiveNodes.pop();

    // if min is an answer node
    if (min.cost == 0) {
      // print the path from root to destination;
      printPath(min);
      return;
    }

    // do for each child of min
    // max 4 children for a node
    for (let i = 0; i < 4; i++) {
      if (isSafe(min.x + row[i], min.y + col[i])) {
        // create a child node and calculate
        // its cost
        let child = newNode(
          min.mat,
          min.x,
          min.y,
          min.x + row[i],
          min.y + col[i],
          min.level + 1,
          min
        );
        child.cost = calculateCost(child.mat, final);

        // Add child to list of live nodes
        pqForLiveNodes.push(child);
      }
    }
  }
  //   console.log(Node);
}

// Driver code
function maincall() {
  let initial = [
    [1, 2, 3],
    [5, 6, 0],
    [7, 8, 4],
  ];

  let final = [
    [1, 2, 3],
    [5, 8, 6],
    [0, 7, 4],
  ];

  let x = 1,
    y = 2;

  printMatrix(initial);

  solve(initial, x, y, final);

  return 0;
}

maincall();
