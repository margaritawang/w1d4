var words = ["ground", "control", "to", "major", "tom"];

function usrmap(array, instructions) {
  var new_array = [];
  for (i in array) {
    var element = array[i];
    new_array.push(instructions(element));
  }
  return new_array;
}

var firstTest = usrmap(words, function(word) {
  return word.length;
});

var secondTest = usrmap(words, function(word) {
  return word.toUpperCase();
});

var thirdTest = usrmap(words, function(word) {
  return word.split('').reverse().join('');
});



//[6, 7, 2, 5, 3]

//[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

//[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]

