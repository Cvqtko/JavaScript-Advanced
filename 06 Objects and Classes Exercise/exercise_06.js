function solve(input) {
	let result = {};
	input.forEach(line=>{
		let[systemName, component, subcomponent] = line.split(" | ");
	

	if(!result[systemName]){
		result[systemName] = {};
	}
	if(!result[systemName][component]){
		result[systemName][component] = [];
	}
	
	result[systemName][component].push(subcomponent);
	});
	
	Object.entries(result).sort((curr, next)=>{
		return Object.entries(next[1]).length - Object.entries(curr[1]).length || curr[0].localeCompare(next[0]);
	}).forEach(([systemName,component]) => {
		console.log(systemName);
		Object.entries(component).sort((curr, next)=>{
			return next[1].lenght - curr[1].lenght;
		}).forEach(([component, subcomponent])=>{
			console.log(`|||${component}`);
			subcomponent.forEach(sub=>{
				console.log(`||||||${sub}`);
			})
		})
	})
}

solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
);