function add(a,b) {
	return a + b;
}

function multiply(a,b) {
	return a * b;
}

function calculate(operation, a, b) {
	return operation(a, b);
}

console.log(calculate(add, 1, 2));
console.log(calculate(multiply, 1, 2));