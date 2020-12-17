function solve() {
	styleBtn = document.getElementById('dropdown');
	dropdown = document.getElementById("dropdown-ul");
	box = document.getElementById('box');

	styleBtn.onclick = function() {
		if (dropdown.style.display == "block") {
			dropdown.style.display = "none";
			box.style.backgroundColor = null;
			// second solution
			// box.style.removeProperty('background-color');
		}
		else {
			dropdown.style.display = "block";
		}
	};

	liElements = document.getElementsByTagName('li');
	// liElements.forEach(e => e.onclick = function() { console.log('sadas') });

	for (let i = 0; i < liElements.length; i++) {
		liElements[i].onclick = function() {
			box.style.backgroundColor = liElements[i].innerHTML;
		};
	}
}