const user = [
    {name: 'John', age: 30, city: 'New York'},
    {name: 'Jane', age: 25, city: 'Los Angeles'},
    {name: 'Mike', age: 32, city: 'Chicago'},
]
// console.dir(user, {depth: null, colors: true});

const names = user.map(user => user.name);
const ages = user.map(user =>user.age);

console.dir(names, {depth: null, colors: true});
console.dir(ages, {depth: null, colors: true});