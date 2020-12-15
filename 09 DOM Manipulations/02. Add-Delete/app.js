function solve() {
	let itemsListElement = document.getElementById('items');

	let inputElement = document.getElementById('newText');

	let liElement = document.createElement('li');

	if (inputElement.value != '') {
		
		// first way
		// liElement.innerHTML = `${inputElement.value} <span class = "delete">[delete]<span>`;
		
		// second way
		 liElement.innerHTML = inputElement.value;
		let deleteElement = document.createElement('span');
		deleteElement.innerText = '[delete]';
		deleteElement.style.cursor = 'pointer';
		deleteElement.style.color = 'red';
		
		liElement.appendChild(deleteElement);
		
		deleteElement.addEventListener('click', function(e){
			let parentElement = e.target.parentElement;
			parentElement.remove();
		});
			
		itemsListElement.appendChild(liElement);

		inputElement.value = '';
	}
}
