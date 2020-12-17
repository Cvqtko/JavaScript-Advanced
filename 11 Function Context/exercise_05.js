function Spy(target, method) {
	let originalFunction = target[method];

	let result = {
		count: 0
	}
	target[method] = function() {
		result.count++;
		return originalFunction.apply(this, arguments);
	}

	return result;
}

let obj = {
	method: () => "invoked"
}
let spy = Spy(obj, "method");

obj.method();
obj.method();
obj.method();

console.log(spy) // { count: 3 }

let spy2 = Spy(console, "log");

console.log(spy2); // { count: 1 }
console.log(spy2); // { count: 2 }
console.log(spy2); // { count: 3 }

