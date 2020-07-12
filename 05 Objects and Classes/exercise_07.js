function solve() {
		  let arr = JSON.parse(json);
		  let outputArr = ["<table>"];
		  outputArr.push(makeKeyRow(arr));
		  arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
		  outputArr.push("</table>"); 
		  function makeKeyRow(arr) { //  ToDo
			};

		  function makeValueRow(obj) { //  ToDo
			};

		  function escapeHtml(value) { //  ToDo
			 };

		  console.log(outputArr.join('\n'));
		}

solve();