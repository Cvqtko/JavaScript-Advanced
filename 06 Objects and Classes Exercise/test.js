function solve() {
	var list = {
		"aou" : 100,
		"me" : 75,
		"foo" : 116,
		"bar" : 15,
	};
	keysSorted = Object.keys(list).sort(function(a, b) {
		return list[a] - list[b]
	})
	console.log(keysSorted);
}
solve();