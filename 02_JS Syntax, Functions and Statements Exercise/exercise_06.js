function solve(numbers) {
	let num = Number(numbers[0]);

	for (var i = 1; i < numbers.length; i++) {
		switch (numbers[i]) {
		case 'chop':
			num /= 2;
			break;
		case 'dice':
			num = Math.sqrt(num);
			break;
		case 'spice':
			num += 1;
			break;
		case 'bake':
			num *= 3;
			break;
		case 'fillet':
			num *= 0.8;

			break;
		}
		console.log(num);
	}
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
