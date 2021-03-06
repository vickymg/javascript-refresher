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
  var result = [];
  while(array.length > 1) {
  	for(var i = 1; i < array.length; i++) {
  		var pair = [array[0], array[i]];
  		result.push(pair);
  	}
  	array.shift();
  }
  return result;
}

var allElementsExceptFirstThree = function(array) {
  return array.splice(3, array.length);
}

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
}

var sortByLastLetter = function(array) {
  sortedArray = []
  var reverseArray = function(array) {
    result = []
    for ( i = 0; i < array.length; i ++ ) {
      result.push(array[i].split("").reverse().join(""));
    }
    return result;
    }
   sortedArray = reverseArray(array).sort();
   return reverseArray(sortedArray);
}

var getFirstHalf = function(string) {
  var strlength = Math.ceil(string.length/2);
  return string.split('', strlength).join("");
}

var makeNegative = function(number) {
  return -Math.abs(number);
}

var numberOfPalindromes = function(array) {
  palindromes = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] == array[i].split('').reverse().join('')) {
      palindromes.push(array[i]);
    }
  }
  return palindromes.length;
}

var shortestWord = function(array) {
  return array.reduce(function(a, b) {
    return b.length > a.length ? a : b;
  });
}

var longestWord = function(array) {
  return array.reduce(function(a, b) {
    return a.length > b.length ? a : b;
  });
}

var sumNumbers = function(array) {
  return array.reduce(function(a, b) { return a + b });
}

var repeatElements = function(array) {
  return (array + "," + array).split(",");
}

var stringToNumber = function(string) {
  return parseInt(string);
}

var calculateAverage = function(array) {
  var sum = array.reduce(function(a, b) { return a + b });
  return sum/array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
  var i = 0;
  var result = [];
  while (array[i] <= 5 ) {
    result.push(array[i]);
    i++
  }
  return result;
}

var convertArrayToObject = function(array) {
  obj = {};
  for (var i = 0; i < array.length; i += 2) {
    obj[array[i]] = array[i+1];
  };
  return obj;
}

var getAllLetters = function(array) {
  var newArray = [];
  for (var word of array) {
    for(var i = 0; i < word.length; i++) {
      newArray.push(word[i]);
    }
  }
  var result = Array.from(new Set(newArray));
  return result.sort();
}


var swapKeysAndValues = function(object) {
  newObj = {}
  for ( var key in object) {
    newObj[object[key]] = key;
  };
  return newObj;
}

var sumKeysAndValues = function(object) {
  var total = 0;
  for (var property in object) {
      total += object[property] + parseInt(property);
  }
  return total;
}

var removeCapitals = function(string) {
  var capitals = /[A-Z]/g
  return string.replace(capitals, "");
}

var roundUp = function(number) {
  return Math.ceil(number);
}

var formatDateNicely = function(date) {
  return date.toLocaleDateString('en-GB');
}

var getDomainName = function(string) {
  domain = string.split(/[@]/)[1];
  return domain.replace(".com", "");
}

var titleize = function(string) {
  var result = [];
  var words = string.split(' ')
  for(i = 0; i < words.length; i++) {
    if(words[i] === "and" || words[i] == "the"){
      result.push(words[i]);
    } else {
      result.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }
  }
  var title = result.join(" ")
  return title.charAt(0).toUpperCase() + title.slice(1);
}

var checkForSpecialCharacters = function(string) {
  return /\W/.test(string);
}

var squareRoot = function(number) {
  return Math.sqrt(number);
}

var factorial = function(number) {
  if(number === 0) {
      return 1;
   }
   return number * factorial(number-1);
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
    return Math.round((5/9) * (number-32));
}

var letterPosition = function(array) {
  return 'Write your method here';
}
