function solve(input) {
   let arrays = new Map()
    for (let i = 0; i < input.length; i++) {
        let currentArray = JSON.parse(input[i]).map(Number).sort((a,b) => b - a)
        let toAdd = currentArray.join(', ')
        if(!arrays.has(toAdd)){
            arrays.set(toAdd, currentArray.length)
        }
    }
    let result = Array.from(arrays.keys()).sort((a,b) => arrays.get(a) - arrays.get(b))
    result.forEach(a => console.log(`[${a}]`))
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
);

solve(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]
);