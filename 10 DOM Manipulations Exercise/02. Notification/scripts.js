function notify(message) {
	let divNotification = document.getElementById('notification');

	divNotification.textContent = message;

	divNotification.style.display = 'block';
	
	// will wait for the 
	setTimeout(() => {
		divNotification.style.display = 'none';
	}, 2000);
}