function solve(arr) {
	const step = Number(arr.pop());

	return arr.filter((x,i) => i % step === 0 ).join('\n');
}

console.log(solve([ '1', '2', '3', '4', '5', '6' ]));