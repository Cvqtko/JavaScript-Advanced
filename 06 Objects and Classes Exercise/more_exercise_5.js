class Rat {
    constructor(name) {
        this.name = name
        this.Rats = []
    }
    unite(obj) {
        if (obj.constructor.name == 'Rat') {
            this.Rats.push(obj)
        }
    }
    getRats() {
        return this.Rats
    }
    toString(){
        let names = this.name
        for (let rat of this.Rats){
           names+=`\n##${rat.name}`
        }
        return names
    }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex