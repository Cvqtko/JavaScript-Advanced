class Request{
	constructor(method, uri, version, message){
		this.method = method;
		this.uri = uri;
		this.version = version;
		this.message = message;
		this.response = undefined;
		this.fulfilled = false;
	}
}

function solve(input) {
	let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
	console.log(myData);
	console.log(myData.response);
}

solve();