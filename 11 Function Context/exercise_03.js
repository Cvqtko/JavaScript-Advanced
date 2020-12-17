function arrayMap(array, func){
	
	//first solution
	// let mappedArray = array.map(x => func(x));
	
	//second solution
	let mappedArray = array.reduce((a,x)=> {
		a.push(func(x));
		return a;
	},[])
	return mappedArray;
}

let nums = [1,2,3,4,5];
console.log(arrayMap(nums,(item)=> item * 2)); 
