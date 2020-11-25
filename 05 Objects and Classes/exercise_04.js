function JsonToHtmlTable(json) {
  let arr = JSON.parse(json);
  let outputArr = ["<table>"];

  outputArr.push(makeKeyRow(arr));

  arr.forEach((obj) => outputArr.push(makeValueRow(obj)));

  outputArr.push("</table>"); 

  function makeKeyRow(arr) {
  	return '<tr><th>Name</th><th>Price</th></tr>';
  };
  
  function makeValueRow(obj) { 
	return `<tr><td>${obj.Name}</td><td>${obj.Price}</td></tr>`;
  };

  console.log(outputArr.join('\n'));
}


JsonToHtmlTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);