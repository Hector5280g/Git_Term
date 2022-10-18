//console.log ("hello world");
//favorite movie
const favMovie = ["sherk", "cars", "nemo"];

let firstMovie = favMovie [0];
console.log(firstMovie);

favMovie.push("toy story");
console.log(favMovie);

favMovie.pop();
console.log(favMovie);

favMovie.unshift("Toys2");

console.log(favMovie);

favMovie.shift();
console.log(favMovie);

//
const array = [];
for ( let i = 1; i < 10; i += 2) {
    array.push(i);
}
console.log(array);
const newArray = [];
for (let i = 2; i <= 20; i++){
    newArray.push(i*3);
}
console.log(newArray);
const pondArray =["#", "##", "###", "####", "#####", "######", "#######"];
let sign = "";
for (let i = 0; i < pondArray.length; i++) {
    sign += pondArray[i] + "\n";
}
console.log(sign);
const foods = ["soda", "pasta", "juice"]
foods.forEach (food => console.log(food + " is in the fridge"));

const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting)

