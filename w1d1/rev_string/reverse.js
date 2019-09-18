
var myArg = process.argv.slice(2);

var reverse = myArg.toString().split('');

function reverseString(input) {
	var outPut = "";
	for (let i = reverse.length - 1; i >= 0; i--) {
		outPut += reverse[i];
	}
	return outPut; 
}

console.log(reverseString());




