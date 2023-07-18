function getCheapestCost(rootNode) {
  let min = Infinity;
  if (!rootNode) return;
  let sum = rootNode.cost;

  function dfs(node, currentSum) {
    const { children } = node;
    for (child of children) {
      const currUnique = currentSum + child.cost;
      dfs(child, currUnique);
    }
    if (!children.length) {
      min = Math.min(currentSum, min);
    }
  }
  dfs(rootNode, sum);
  return min;
}

/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/

// Constructor to create a new Node
function Node(cost) {
  this.cost = cost;
  this.children = [];
}

const exampleNode1 = new Node(0);
const firstChild1 = new Node(5);
const firstChild2 = new Node(3);
const firstChild3 = new Node(6);
exampleNode1.children.push(firstChild1, firstChild2, firstChild3);

const SecondChild1 = new Node(4);
firstChild1.children.push(SecondChild1);

const SecondChild2 = new Node(2);
const SecondChild3 = new Node(0);
firstChild2.children.push(SecondChild2, SecondChild3);

const SecondChild4 = new Node(1);
const SecondChild5 = new Node(5);
firstChild3.children.push(SecondChild4, SecondChild5);

const thirdChild1 = new Node(1);
SecondChild2.children.push(thirdChild1);

const thirdChild2 = new Node(10);
SecondChild3.children.push(thirdChild2);

const fourthChild1 = new Node(1);
thirdChild1.children.push(fourthChild1);

console.log(getCheapestCost(exampleNode1));
