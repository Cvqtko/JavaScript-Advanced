function solve(arr) {
	let smallest = arr[0];
	let smaller = arr[1];
	for (let i = 1; i < arr.length; i++) {
		if (smallest > arr[i]) {
			smaller = smallest;
			smallest = arr[i];
		} else if (smaller > arr[i]) {
			smaller = arr[i];
		}
	}

	console.log(smallest + ' ' + smaller);
}

solve([ 3, 0, 10, 4, 1, 3 ]);
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);