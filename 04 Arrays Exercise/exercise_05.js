function solve(arr) {
	let count = arr[0];
	console.log(count);
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > count) {
			count = arr[i];
			console.log(count);
		}
	}
}

solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24 ]);
solve([ 1, 2, 3, 4 ]);
solve([ 20, 3, 2, 15, 6, 1 ]);