function solve(input) {
	let towns = {};
	for (let i = 0; i < input.length; i+=2) {
		let town = input[i];
		let population = Number(input[i+1]);
		if(!towns.hasOwnProperty(town)){
			towns[input[i]] = population;
		}else{
			towns[input[i]] = towns[input[i]] + population;
		}
	}
	console.log(JSON.stringify(towns));
}
solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);
solve(['Sofia','20','Varna','3','sofia','5','varna','4']);