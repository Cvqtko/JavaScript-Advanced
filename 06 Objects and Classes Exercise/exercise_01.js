function solve(input) {
	const catalog  = {};
	
	for(let line of input){
		const arr = line.split(' : ');
		const product = arr[0];
		const price = arr[1];
		
		const letter = product[0];
		if(catalog.hasOwnProperty(letter)){
			catalog[letter][product] = price;

		}else{
			catalog[letter] ={};
			catalog[letter][product] = price;
		}

	}
	
	const ordered = {};
	Object.keys(catalog).sort().forEach((key)=> {
		ordered[key] = catalog[key];
	});

	for (const [key, value] of Object.entries(ordered)) {
		console.log(`${key}`);
		Object.keys(value).sort().forEach((key)=>{
			console.log(` ${key} : ${ordered[key[0]][key]}`);
		});
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