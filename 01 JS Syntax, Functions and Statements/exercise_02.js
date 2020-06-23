function solve(num1, num2, operator) {

	let result;
	switch (operator) {
	case '+':
		result = num1 + num2;
		break;
	case '-':
		result = num1 - num2;
		break;
	case '/':
		result = num1 / num2;
		break;
	case '*':
		result = num1 * num2;
		break;
	case '%':
		result = num1 % num2;
		break;
	case '**':
		result = Math.pow(num1, num2);
		break;
	default:
		result = 'Invalid input';
	}
	console.log(result);

}

solve(2, 4, "**");
