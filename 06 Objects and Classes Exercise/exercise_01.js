function jsonsTable (inputData) {
    let html = '<table>\n'
    for(let row of inputData){
        let person = JSON.parse(row)
        html += '   <tr>\n'
        html += '\t<td>' + person.name + '</td>\n'
        html += '\t<td>' + person.position + '</td>\n'
        html += '\t<td>' + person.salary + '</td>\n'
        html += '   <tr>\n'
    }
    html += '</table>'
    return html
}
console.log(jsonsTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
	'{"name":"Teo","position":"Lecturer","salary":1000}',
	'{"name":"Georgi","position":"Lecturer","salary":1000}']
));