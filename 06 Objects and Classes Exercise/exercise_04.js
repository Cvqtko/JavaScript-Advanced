function solve(inputArr) {
	let sortedArr = inputArr.sort();
	
	let firstLetter = sortedArr[0][0];
	
	console.log(firstLetter);
	
	for(let string of sortedArr){
		if(string[0]!==firstLetter){
			firstLetter = string[0];
			console.log(firstLetter);
		}
		let[key, value] = string.split(" : ");
		console.log(` ${key}: ${value}`);
	}
}

solve(
		['Appricot : 20.4',
			'Fridge : 1500',
			'TV : 1499',
			'Deodorant : 10',
			'Boiler : 300',
			'Apple : 1.25',
			'Anti-Bug Spray : 15',
			'T-Shirt : 10']
);
console.log('--------------------------');
solve(
		['Banana : 2',
			'Rubic\'s Cube : 5',
			'Raspberry P : 4999',
			'Rolex : 100000',
			'Rollon : 10',
			'Rali Car : 2000000',
			'Pesho : 0.000001',
			'Barrel : 10']
);