function solve(n,k) {
	let lastNumber = 1;
	let arr = new Array(k);
	let arrSequense = new Array();
	arrSequense.push(lastNumber);
	arr.fill(0);
	arr[arr.length-1]=lastNumber;
	
	for(let i = 1;i<n;i++){
		lastNumber = arr.reduce((a, b) => a + b, 0);
		arr= arr.slice(1);
		arr.push(lastNumber);
		arrSequense.push(lastNumber);
		
	}
	console.log(arrSequense.join(' '));
}

solve(6, 3);
solve(8, 2);