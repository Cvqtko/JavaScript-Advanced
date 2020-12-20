function solve(input) {
	let result = input.map(([width, height]) => {
		return {
			width: width,
			height: height,
			area: function() {
				return width * height;
			},
			compareTo: function(rect) {
				let result = this.area() - rect.area();
				if(result == 0){
					return this.width-rect.width;
				}else{
					return result;
				}
			}
		}
	});

	result.sort((a, b) => {
		return b.compareTo(a);
	});
	
	console.log(result);
}

solve([[10,5], [3,20], [5,12]]);