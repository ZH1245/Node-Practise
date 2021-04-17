// JSON INTRO
// BY VALUE
let point = {
  x: 2,
  y: 20,
};
// printing an object in JSON
console.log(point);
// changing values of JSON/any object
point.x = 11;
point.y = 10;
console.log(point);
// Adding new value in object / JSON
point.z = 19;
console.log(point);
// Adding a new value using Indexing
point["message"] = "HELLO WORLD";
console.log(point);
// Printing any index value
console.log(point["x"], point["y"]);

// BY REFERENCE
let x = 10;
let y = x;
x = 20;
console.log(x, y);
// Doing using JSON
let person = { name: "ALI", email: "another@gmail.com" };
let anotherPerson = person;
anotherPerson.name = "Aslam";
console.log(anotherPerson, person);
// OBSERVATIONS: Objects are Passed using Reference

// Copying an Object values into another without reference
let thirdPerson = Object.assign({}, person);
// Shortcut of above command:
let thirdPerson2 = { ...person };
thirdPerson.name = "Zain";
console.log("After Creating Deep Copy");
console.log(anotherPerson, person, thirdPerson);
