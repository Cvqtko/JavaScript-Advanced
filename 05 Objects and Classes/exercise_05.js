function solve(input) {
	let products = {};
	let sequence = [];

	for (let line of input) {
		let arr = line.split(' | ');
		let town = arr[0];
		let product = arr[1];
		let price = Number(arr[2]);

		if (product in products) {
			if (price < products[product].price) {
				products[product].price = price;
				products[product].town = town;
			}
		}
		else {
			let obj = {};
			obj.price = price;
			obj.town = town;
			products[product] = obj;
			sequence.push(product);
		}
	}

	for (let pr of sequence) {
		console.log(pr + " -> " + products[pr].price + ' (' + products[pr].town + ')');
	}
}

solve(['Sample Town | Sample Product | 1000',
	'Sample Town | Orange | 2',
	'Sample Town | Peach | 1',
	'Sofia | Orange | 3',
	'Sofia | Peach | 2',
	'New York | Sample Product | 1000.1',
	'New York | Burger | 10']
);