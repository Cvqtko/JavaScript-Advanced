function solve() {

	let max = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
		if (arguments[i] > max) {
			max = arguments[i];
		}
	}

	console.log("The largest number is " + max);
}

solve(-3, -5, -22.5, 10);
