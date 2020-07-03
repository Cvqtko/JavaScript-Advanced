function solve(arr) {
	const step = Number(arr.pop());

	for (var i = 0; i < arr.length; i += step) {
		console.log(arr[i]);
	}
}

solve([ '1', '2', '3', '4', '5', '6' ]);