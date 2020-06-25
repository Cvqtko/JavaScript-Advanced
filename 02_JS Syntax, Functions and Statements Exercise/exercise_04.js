function solve(steps, footprint, speed) {
	const distInKM = steps * footprint;
	let timeInSeconds = Math.round(distInKM / speed * 3.6);

	timeInSeconds += Math.floor(distInKM / 500) * 60;

	const seconds = timeInSeconds % 60;
	timeInSeconds -= seconds;
	const minutes = (timeInSeconds / 60) % 60;
	timeInSeconds -= minutes * 60;
	const hours = timeInSeconds / 3600;

	console.log(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);

	function pad(num) {
		if (num < 10) {
			return '0' + num;
		}
		return '' + num;
	}
}

solve(4000, 0.60, 5);

solve(2564, 0.70, 5.5);