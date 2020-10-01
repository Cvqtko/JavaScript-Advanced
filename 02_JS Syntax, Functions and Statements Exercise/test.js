let arr = ['a', 'b', 'c'];
console.log(arr.includes('c', -2)); // true
arr.includes('b', -100); // true
arr.includes('c', -100); // true
arr.includes('a', -2); // false
