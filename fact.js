function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(4));

//question two
//const { address: { geo: { lat } } } = user;

//question three
function getAllDescendants(tree) {
  let descendants = [];

  function recurse(node) {
    if (!node || !node.children) return;
    for (let child of node.children) {
      descendants.push(child.name);
      recurse(child);
    }
  }

  recurse(tree);
  return descendants;
}

let theJonathans = {
  children: [
    {
      name: "Elias",
    },
    {
      name: "Sarah",
      children: [
        {
          name: "Max",
          children: [
            {
              name: "Lily",
            },
          ],
        },
        {
          name: "Zoe",
        },
        {
          name: "Theo",
        },
      ],
    },
    {
      name: "Maria",
      children: [
        {
          name: "Daniel",
        },
      ],
    },
    {
      name: "David",
    },
  ],
};

console.log(getAllDescendants(theJonathans));
