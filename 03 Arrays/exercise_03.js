function solve(arr) {
	let result = new Array();
	
	arr.forEach(x=>{
		if(x>=0){
			result.push(x);
		}else{
			result.unshift(x);
		}
	})
	console.log(result);
}

solve([3, -2, 0, -1]);
solve([7, -2, 8, 9]);