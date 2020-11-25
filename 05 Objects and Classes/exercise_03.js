function solve(input) {
	let towns={};
	let split = input.map(row => row.split("<->").map(x => x.trim()));
	for (let i = 0; i < split.length; i++) {
		let town = split[i][0];
		let population = Number(split[i][1]);

		if (!towns.hasOwnProperty(town)) {
			towns[split[i][0]] = population;
		} else {
			towns[split[i][0]] = towns[split[i][0]] + population;
		}
	}
	for (let property in towns) {
 		 console.log(`${property}: ${towns[property]}`);
	}
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);
console.log();
solve(['Istanbul <-> 100000',
	'Honk Kong <-> 2100004',
	'Jerusalem <-> 2352344',
	'Mexico City <-> 23401925',
	'Istanbul <-> 1000']
);
