const dummyObject = {a: 1, b: 2, c: 3};

const arr = Object.entries(dummyObject)
const values = arr.map((item)=>{
    return item[1];// [1,2,3] if you want to get values
    // return item[0]; // ['a', 'b', 'c'] if you want to get keys
    // return item; // [['a', 1], ['b', 2], ['c', 3]] if you want to get both keys and values
})
console.log(values)