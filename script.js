//Prototype
//import { hello1, hello2 } from "module.js";

function FuncPrototype(text) {
  this.myAtt1 = text;
  // Function exterireur
  this.Externe = function (arg) {
    console.log(arg);
    interne(arg);
  };
  function interne(text) {
    console.log("function interne", text);
  }
}

// Declare
let protofunct = new FuncPrototype("Text");

// Add attibute
FuncPrototype.prototype.myAtt2 = "yes";
console.log(protofunct.myAtt1, " ", protofunct.myAtt2); // Add function
FuncPrototype.prototype.Hello = function () {
  console.log("hello world!");
};
protofunct.Hello();
protofunct.Externe("Ceci est un test");

console.log(protofunct);

// Test chaine
console.log(
  "-----------------------------------------------------------------------------"
);
console.log("Test chaine");
let s1 = "arbre";
let s2 = "ARBRE";
if (s1 == s2) console.log("arbre == ARBRE");
if (s1 === s2) console.log("arbre === ARBRE");

console.log("test acces index non valide");
console.log(s1[s1.lenght]); // "Undefined"

console.log(`Ma chaine dependant d une fonction ${funt()}}`);

function funt() {
  return s1 + s2;
}

// Test tableau
console.log(
  "-----------------------------------------------------------------------------"
);
console.log("Test tableau");
let array2D = [
  [1, 2, 3, 4],
  [9, 8, 7, 6, 5],
];
console.log(array2D);

// New syntax
let array2D_2 = Array.of(Array.of(1, 2, 3, 4), Array.of(9, 8, 7, 6, 5));
console.log(array2D_2);

// Boucle by value
for (let value of array2D) document.writeln(value + "<br>");

// Boucle by index
for (index in array2D) document.writeln(index + "<br>");

// Array for each
array2D.forEach((item, index, arrayItem) =>
  document.writeln("item ", item, "index ", index, "Array item ", arrayItem)
);

// Join
document.writeln("<hr> join");
document.writeln(array2D.join());

// Map
let arrayToMap = [-1, 0, 10, -23];
let mapArr = arrayToMap.map((item) => item > 0);
document.writeln("<hr> Map");
document.writeln(mapArr);

// Slice
arrayToMap.join();

// Test map
console.log(
  "-----------------------------------------------------------------------------"
);
console.log("Test map");

let m = new Map();
m.set("First", 1);
m.set("second", 2);

document.writeln("<hr> Map");
console.log(m);
document.writeln(m);

const itv = m.values();
const itk = m.keys();
const entries = m.entries();

document.writeln("<hr> m.keys();");
document.writeln("<hr>" + itk.next().value);
document.writeln("<hr>" + itk.next().value);

document.writeln("<hr> m.values();");
document.writeln("<hr>" + itv.next().value);
document.writeln("<hr>" + itv.next().value);

document.writeln("<hr> m.entries();");
document.writeln("<hr>" + entries.next().value);
document.writeln("<hr>" + entries.next().value);

console.log(entries);
