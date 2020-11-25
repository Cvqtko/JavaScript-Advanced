let x = { name : 'John' };

let y = Object.assign({}, x);
y.name = "Pesho";

console.log(x.name);
console.log(y.name);