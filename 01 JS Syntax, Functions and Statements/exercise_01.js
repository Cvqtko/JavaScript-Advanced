function solve(str1, str2, str3) {
	var sum = str1.length + str2.length + str3.length;
	var average = Math.floor(sum / 3);

	console.log(sum);
	console.log(average);

}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');