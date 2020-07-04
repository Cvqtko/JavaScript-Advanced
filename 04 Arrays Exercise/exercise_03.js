function solve(arr) {
	let n = 1;
	let result = [];
	
	arr.forEach(el=> {
		el ==='add'? result.push(n) : result.pop();
		n++;
	})
	
	console.log(result.length === 0? 'Empty' : result.join('\n'));
}

solve([ 'add', 'add', 'remove', 'add', 'add' ]);
solve([ 'add', 'add', 'add', 'add' ]);
solve([ 'remove', 'remove', 'remove' ]);