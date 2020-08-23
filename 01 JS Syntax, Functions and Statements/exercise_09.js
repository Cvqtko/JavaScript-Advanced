function solve(text) {

  let result = text.toUpperCase()
    .split(/[\W]+/)
    .filter(w => w.length > 0)
    .join(", ");

  console.log(result);
}

function solve2(text) {
	  let result = text.toUpperCase()
	    .match(/\w+/g)
	    .join(', ');
	  
	  console.log(result);
}

solve('Hi, how are you?');
solve('hello');

solve2('Hi, how are you?');
solve2('hello');
