let someWord = "abc";

function addElement(someWord,el){
	someWord = someWord.concat(el);
}

addElement(someWord, "d");
console.log(someWord);

/* In fact, no string methods change the string they operate on, they all return new strings. 
The reason is that strings are immutable – they cannot change, we can only ever make new strings. 
Strings are not the only immutable values built into JavaScript. Numbers are immutable too. */