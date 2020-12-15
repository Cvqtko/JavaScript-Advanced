function attachEventsListeners() {

	let daysBtn = document.getElementById('daysBtn');
	let hoursBtn = document.getElementById('hoursBtn');
	let minutesBtn = document.getElementById('minutesBtn');
	let secondsBtn = document.getElementById('secondsBtn');

	let days = document.getElementById('days');
	let hours = document.getElementById('hours');
	let minutes = document.getElementById('minutes');
	let seconds = document.getElementById('seconds');

	daysBtn.addEventListener('click', () => { calcOnSecondBase(Number(days.value) * 86400) });
	hoursBtn.addEventListener('click', () => { calcOnSecondBase(Number(hours.value) * 3600) });
	minutesBtn.addEventListener('click', () => { calcOnSecondBase(Number(minutes.value) * 60) });
	secondsBtn.addEventListener('click', () => { calcOnSecondBase(Number(seconds.value)) });


	function calcOnSecondBase(currentSeconds) {
		seconds.value = currentSeconds;
		days.value = currentSeconds / 86400;
		hours.value = (currentSeconds / 86400) * 24;
		minutes.value = (currentSeconds / 86400) * 1440;
	};
}
