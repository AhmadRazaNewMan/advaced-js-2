const dummyObject = {a: 1, b: 2, c: 3};

const arr = Object.entries(dummyObject)

console.dir(arr, {depth: null, colors: true});
console.log(Array.isArray(arr)); // true
