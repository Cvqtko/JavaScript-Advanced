class Stringer{
	 constructor(initialString, length) {
        this.initialString = initialString;
        this.length = length;
    }
	increase(length){
		 this.length = this.length + length;
	}
	decrease(length){
		this.length = this.length - length > 0? this.length - length:0;
	}
	toString(){
		if(this.length >= this.initialString.length){
			return this.initialString.substring(0, this.length);
		}else{
			return this.initialString.substring(0, this.length) + `...`;
		}
	}
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
