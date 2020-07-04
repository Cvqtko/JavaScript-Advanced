function solve(arr) {
	let n = Number(arr.pop());

	for (let i = 0; i < n; i++) {
		arr.unshift(arr.pop());
	}
	console.log(arr);
}

solve([ '1', '2', '3', '4', '2' ]);
solve([ 'Banana', 'Orange', 'Coconut', 'Apple', '15' ]);