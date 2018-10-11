function ubahHuruf(kata) {
	// you can only write your code here!
	var libraryWords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',	'u', 'v', 'w', 'x', 'y', 'z'];
	var resultWords = '';
	for (var i = 0; i < kata.length; i++) {
		resultWords += libraryWords[libraryWords.indexOf(kata[i]) + 1];
	}
	//console.log(resultsWords);
	return resultWords;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu