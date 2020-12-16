function Person(first, last) {
	this.firstName = first;
	this.lastName = last;
	Object.defineProperty(this, "fullName", {
		set: function(value) {
			let pattern = /\w \w/;
			if (pattern.test(value)) {
				let [first, last] = value.split(' ');
				this.firstName = first;
				this.lastName = last;
			}
		},
		get: function() {
			return `${this.firstName} ${this.lastName}`;
		}
	}
	);
}
let person = new Person("Albert", "Simpson");
console.log(person.fullName);//Albert Simpson
person.firstName = "Simon";
console.log(person.fullName);//Simon Simpson
person.fullName = "Peter";
console.log(person.firstName) // Simon
console.log(person.lastName) // Simpson


