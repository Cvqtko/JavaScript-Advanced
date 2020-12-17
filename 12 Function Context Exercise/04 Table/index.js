function solve() {
	let tr = document.getElementsByTagName('tr');
	let lastClicked;
	[...tr].slice(1).forEach(row => {

		row.addEventListener('click', (event) => {
			let element = event.target.parentNode.style;
			if (element.backgroundColor == '') {
				element.backgroundColor = '#413f5e';
				//check if lastClicked exists and is not undefined,
				//TypeError: Cannot set property 'backgroundColor' of undefined
				if (lastClicked) {
					lastClicked.backgroundColor = '';
				}
			} else {
				element.backgroundColor = '';
			}
			lastClicked = element;
		})
	})
}
