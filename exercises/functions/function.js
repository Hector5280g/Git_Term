//function declaration 
//function one (){
   // return "one";
//}
//console.log (one());
//one();//calling a function 
//const two = () =>{
   // return 2; 
//}
//console.log (two());
//const shortenedTwo = () => 2;

//const hectorGarcia = {
    
//}
function areBothEven(n1, n2) {
    return !(n1 % 2) && !(n2 % 2);
}
areBothEven(3, 7);


const sayName = (name) => {
    console.log( `Hello my name is ${name}`);
}
sayName('Hector')

const calculateAreaOfSquare = (length, height) => {
    let sqft = length * height ; 
    console.log(`The area in the square is ${sqft} sqft.`);
}
calculateAreaOfSquare(12, 13)

const areaOfTriangle = (length, height, width) => {
    width = 2
    let area = length * height / width;
    console.log(`The area of the triangle is ${area}. `)
}
areaOfTriangle(13,40)

const caclulateAreaOfCircle = (radius) => {
    let sqft = radius * radius * 3.14;
    console.log(`The area of a circle with a radius of ${radius} is ${sqft} square units.`)
}
caclulateAreaOfCircle(12);

const planetHasWater = (planet) => {
    return (planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars')
}
