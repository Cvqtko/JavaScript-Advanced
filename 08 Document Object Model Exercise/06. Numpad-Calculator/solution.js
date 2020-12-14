function solve() {

	let expression = document.getElementById('expressionOutput');
	let result = document.getElementById('resultOutput');

	document.querySelector('.keys').addEventListener('click', symbolClicked);

	document.querySelector('.clear').addEventListener('click', clear);


	function clear() {
		expression.textContent = '';
		result.textContent = '';
	}

	function symbolClicked(event) {
		let buttonPressed = event.target.value;

		switch (buttonPressed) {
			case "/":
			case "*":
			case "+":
			case "-":
				expression.textContent += ` ${buttonPressed} `;
				break;
			case "=":
				let [leftOperand, operator, rightOperand] = expression.textContent.split(' ');
				if (!operator || !rightOperand) {
					result.textContent = 'NaN';
				} else {
					let operationResult = '';
					switch (operator) {
						case "/": operationResult = Number(leftOperand)/ Number(rightOperand);
						break;
						case "*":  operationResult = Number(leftOperand)* Number(rightOperand);
						 break;
						case "+":  operationResult = Number(leftOperand)+ Number(rightOperand);
						 break;
						case "-":  operationResult = Number(leftOperand)- Number(rightOperand);
						break;
					}
					result.textContent = operationResult;
				}
				break;
			default:
				expression.textContent += buttonPressed;
		}

	}


}

