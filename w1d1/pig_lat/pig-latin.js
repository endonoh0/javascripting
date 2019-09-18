var myArg = process.argv.slice(2);
var string = myArg.toString(); 

// first i need to check if the first letter starts with a vowel
// if so, move the first letter to the end
// add 'way'

function translate () {
  var newString = string;
  if (newString.slice(0, 1).match(/aeiou/gi)) {
    newString += "way";
  } else {
    var move = "";
    while (newString.slice(0, 1).match(/^aeiou/)) {
      move += newString.slice(0, 1);
      newString = newString.slice(1, newString.length);
    }
    newString = newString + move + "ay";
  }
  return newString.split(' ');
}

console.log(translate());

