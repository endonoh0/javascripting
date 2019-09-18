var myArgs = process.argv; 
var password = myArgs[2].split('');

function obfuscate () {
	for (let i = 0; i < password.length; i++) {
		if (password[i] === "a") {
			password[i] = 4;
		} else if (
			password[i] === "e") {
			password[i] = 3;
		} else if (
			password[i] === "o") {
			password[i] = 0;
		} else if (
			password[i] === "l") {
			password[i] = 1;
		} else if (
			password[i] === "S") {
			password[i] = 5;
		}
	} 
	return password.join('');
}

console.log(obfuscate()); 


