//first exercise
var array = [10, 2, 5, 1, 9];
var newArray = array.sort(function(a,b) {
  return a - b;
});

console.log(newArray);

//second exercise
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var newList = students.sort(function(a,b) {
  if (a['name'] < b['name']) {
    return -1;
  }
  else if (a['name'] === b['name']) {
    return a['age'] - b['age'];
  }
  else {
    return 1;
  }
});

console.log(newList);