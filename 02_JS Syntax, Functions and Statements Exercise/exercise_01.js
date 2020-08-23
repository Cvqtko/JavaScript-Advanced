function solve(fruit, weightInGrams, price) {

	const weightInKilos = weightInGrams / 1000;

	const totalPrice = weightInKilos * price;

//	second solution
//	console.log('I need $' + totalPrice.toFixed(2) + ' to buy '
//			+ weightInKilos.toFixed(2) + ' kilograms ' + fruit + '.')

	console.log(`I need $${totalPrice.toFixed(2)} to buy 
			 ${weightInKilos.toFixed(2)} kilograms fruit .`)

}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);