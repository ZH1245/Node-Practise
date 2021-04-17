// Arrays and Arrow Functions
let students = ["Usman", "Ali", "Abdullah", "Ahmad"];
console.log(students.length);
console.log(students);
students[7] = "Zain";
console.log(students);

// Search in Array
console.log(students.find(check));
// By INDEX:
console.log(students.findIndex(check));
function check(param) {
  if (param == "Zain") return true;
  else return false;
}

// SORTING
students.sort();
console.log(students);
// Splicing
// first is INDEX, 2nd is Number of elements to replace with, 3rd is the element to be inserted
// No Replacing
students.splice(0, 0, "Student1", "Student2");
console.log(students);
// Replacing with 1 element
students.splice(0, 1, "Student1", "Student2");
console.log(students);
students.sort(customSort);
console.log(students);
function customSort(param, param2) {
  if (param < param2) return -1;
  else return 1;
}

// MAPPING
let rates = [2, 4, 6];
let newrates = rates.map((r) => {
  return r * 2;
});
console.log(newrates);

// Object Destructuring
let address = {
  title: "Lahore",
  location: "Punjab, Pakistan",
};

let printAddress = (title, location) => {
  console.log(title + " is IN " + location);
};
const { title, location } = address;
printAddress(title, location);
