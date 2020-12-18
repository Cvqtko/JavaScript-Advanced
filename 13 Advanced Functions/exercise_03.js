function solve(data, criteria) {

	let users = JSON.parse(data);
	[prop, value] = criteria.split('-');

	// 0. Ardine Bassam - abassam0@cnn.com

	let usersList = '';
	let counter = 0;

	users.forEach(user => {
		if (user.hasOwnProperty(prop)) {
			if (user[prop] == value) {
				usersList += `${counter}. ${user.first_name} ${user.last_name} - ${user.email} \n`;
				counter++;
			}
		}
	})

	return usersList;
}



let data = `[{
	"id": "1",
	"first_name": "Kaylee",
	"last_name": "Johnson",
	"email": "k0@cnn.com",
	"gender": "Female"
}, {
	"id": "2",
	"first_name": "Kizzee",
	"last_name": "Johnson",
	"email": "kjost1@forbes.com",
	"gender": "Female"
}, {
	"id": "3",
	"first_name": "Evanne",
	"last_name": "Maldin",
	"email": "emaldin2@hostgator.com",
	"gender": "Male"
}, {
	"id": "4",
	"first_name": "Evanne",
	"last_name": "Johnson",
	"email": "ev2@hostgator.com",
	"gender": "Male"
}]`;

let criteria = 'last_name-Johnson';

console.log(solve(data, criteria));
