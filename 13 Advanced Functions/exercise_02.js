function currencyFormatter(value) {
	let result = Math.trunc(value) + ",";
	result += value.toFixed(2).substr(-2, 2);
	return '$' + ' ' + result;

}

let dollarFormatter = currencyFormatter;
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71
