function solve(input) {
	let heroes = [];
	
	input.forEach(line=>{
		let[name,level,items] = line.split('/');
		level = Number(level);
		
		items = items !== undefined? items.split(', ') : [];
		
		// items = items? item.split(', ') : [];
		
		let hero={ name: name, level: level, items: items};
		
		heroes.push(hero);
		
		
	});
	
	console.log(JSON.stringify(heroes));
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);
solve(['Jake / 1000 / Gauss, HolidayGrenade']);