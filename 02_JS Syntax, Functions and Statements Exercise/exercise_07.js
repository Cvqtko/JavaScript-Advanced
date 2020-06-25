function solve([x1,x2,y1,y2]) {

	isValid(x1, y1, 0, 0);
	isValid(x2, y2, 0, 0)
	isValid(x1, y1, x2, y2)
	

	function isValid(x1, y1, x2, y2) {
		function distance(x1, y1, x2, y2) {
			let distH = x1 - x2;
			let distY = y1 - y2;
			return (Math.sqrt(Math.pow(distH, 2) + Math.pow(distY, 2)));
		}

		if (Number.isInteger(distance(x1, y1, x2, y2))) {
			console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
		} else {
			console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
		}
	}
}

solve([ 3, 0, 0, 4 ]);
solve([ 2, 1, 1, 1 ]);