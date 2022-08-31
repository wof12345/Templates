//code reference taken from geekforgeeks https://www.geeksforgeeks.org/8-puzzle-problem-using-branch-and-bound/
//reimplemented in js

let N = 3;
let states = [];

let row = [1, 0, -1, 0];
let col = [0, -1, 0, 1];

class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  push(element, priority) {
    let qElement = new QElement(element, priority);

    let contain = false;
    let isPushed = false;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].element === qElement.element) {
        contain = true;
        break;
      }
    }

    if (!contain) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].priority > qElement.priority) {
          this.items.splice(i, 0, qElement);
          isPushed = true;
          break;
        }
      }

      if (!isPushed) {
        this.items.push(qElement);
      }
    }
  }

  shift() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }

  pop() {
    if (this.isEmpty()) return "Overflow";
    return this.items.pop();
  }

  removeAll() {
    while (!this.isEmpty()) this.items.shift();
  }

  front() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }

  rear() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printPQueue() {
    var ar = [];
    for (var i = 0; i < this.items.length; i++) ar.push(this.items[i].element);
    return ar;
  }
}

// state space tree nodes
let Node = {
  parent: 0,
  mat: [],
  x: 0,
  y: 0,
  cost: -1,
  level: 0,
};

function swap(space, oldCor, newCor) {
  let temp = space[oldCor[0]][oldCor[1]];
  space[oldCor[0]][oldCor[1]] = space[newCor[0]][newCor[1]];
  space[newCor[0]][newCor[1]] = temp;
}

function PQtoArray(PQ) {
  let tempArr = [];

  PQ.split(" ").forEach((elm) => {
    if (elm !== "" && elm !== " " && elm !== "NaN") tempArr.push(elm);
  });

  return tempArr;
}

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

function newNode(mat, x, y, newX, newY, level, parent) {
  Node.parent = parent;

  Node.mat = mat.map(function (arr) {
    return arr.slice();
  });

  swap(Node.mat, [x, y], [newX, newY]);

  Node.cost = Number.MAX_SAFE_INTEGER;

  Node.level = level;

  Node.x = newX;
  Node.y = newY;

  return { ...Node };
}

function calculateCost(initial, final) {
  let count = 0;
  for (let i = 0; i < N; i++)
    for (let j = 0; j < N; j++)
      if (initial[i][j] && initial[i][j] != final[i][j]) count++;
  return count;
}

function isSafe(x, y) {
  return x >= 0 && x < N && y >= 0 && y < N;
}

function printPath() {
  //   console.log(states);

  for (let i = 0; i < states.length; i++) {
    printMatrix(states[i].mat);
  }
}

function solve(initial, x, y, final) {
  let pqForLiveNodes = new PriorityQueue();
  let debugIt = 0;

  let root = newNode(initial, x, y, x, y, 0, null);
  root.cost = calculateCost(initial, final);
  console.log(root);

  pqForLiveNodes.push(root, root.cost);

  while (!pqForLiveNodes.isEmpty()) {
    let min = pqForLiveNodes.front().element;
    // console.log(min);

    states.push(min);

    pqForLiveNodes.pop();

    if (min.cost <= 0) {
      printPath(min);
      return;
    }

    for (let i = 0; i < 4; i++) {
      if (isSafe(min.x + row[i], min.y + col[i])) {
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
        console.log("pq : ", child);

        pqForLiveNodes.push(child, child.cost);
      }
    }
    console.log("^ ", min);

    debugIt++;
    if (debugIt >= 3) break;
  }
}

function maincall() {
  let initial = [
    [1, 2, 3],
    [5, 6, 7],
    [0, 8, 4],
  ];

  let final = [
    [1, 2, 3],
    [5, 6, 7],
    [8, 4, 0],
  ];

  let x = 2,
    y = 0;

  printMatrix(initial);

  solve(initial, x, y, final);

  return 0;
}

maincall();
