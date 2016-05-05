var selectElementsStartingWithA = function(array) {
  return array.filter(function startsWithA(word) { return word[0] === "a" });
}

var selectElementsStartingWithVowel = function(array) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  function startsWithVowel(word) { return vowels.indexOf(word[0]) > -1}
  return array.filter(startsWithVowel);
}

var removeNullElements = function(array) {
  return array.filter(function(n) { return n !== null } );
}

var removeNullAndFalseElements = function(array) {
  return array.filter(function(n) { return n !== false && n !== null });
}

var reverseWordsInArray = function(array) {
  result = []
  for ( i = 0; i < array.length; i ++ ) {
    result.push(array[i].split("").reverse().join(""));
  }
  return result;
}

var everyPossiblePair = function(array) {
  return 'Write your method here';
}

var allElementsExceptFirstThree = function(array) {
  return array.splice(3, array.length);
}

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
}

var sortByLastLetter = function(array) {
  return 'Write your method here';
}

var getFirstHalf = function(string) {
  var strlength = Math.ceil(string.length/2);
  return string.split('', strlength).join("");
}

var makeNegative = function(number) {
  return -Math.abs(number);
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  return 'Write your method here';
}

var longestWord = function(array) {
  return 'Write your method here';
}

var sumNumbers = function(array) {
  return array.reduce(function(a, b) { return a + b });
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return parseInt(string);
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return Math.ceil(number);
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
