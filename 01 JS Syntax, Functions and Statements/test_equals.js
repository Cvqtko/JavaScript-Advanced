function solve(arg){
	let age = '20';
	if(age == arg){
		console.log("Yes");
	}else{
		console.log("No");
	}
}

solve(20);

function solve2(){
	let age = '20';
	if(age == arguments[0]){
		console.log("Yes");
	}else{
		console.log("No");
	}
}

solve2(20);