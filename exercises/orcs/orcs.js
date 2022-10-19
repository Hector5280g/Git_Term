// const adventurer = {
// 	name: 'Hector',
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite",
// 			belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
// 		}  
// 	}
// }
// const movies = [ 
//     { title: "Tokyo Story" },  
//     { title: "Paul Blart: Mall Cop" }, 
//     { title: "L'Avventura" } 
// ];
// console.log(movies[0].title);

// for( let i = 0; i < movies.length; i++) { 
// console.log(movies[i].title);
// }

// const foo = {
//     someArray:[1,2,3]
// };
// foo.someArray[0]; 

// 

// class Character {
//     constructor (name, age, eyes, hair) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite thee you vile person');
//     }
//   }
  
//   const me = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown');
//   console.log(me);
// class Car {
//   constructor (maker, serialNumber) {
//     this.serialNumber = serialNumber;
//     this.maker = maker
//   }
//   drive () {
//     console.log('Vroom Vroom');
//   }
// }

// const newCar = new Car('Mazda', 12345);
// console.log(newCar);

// class Factory {
//   constructor (company) {
//     this.company = company;
//     this.cars = [];
//   }
//   generateCar () {
//     const newCar = new Car(this.company, this.cars.length);
//     this.cars.push(newCar);
//   }
//   findCar (index) {
//     return this.cars[index];
//   }
// }
// const tesla = new Factory('Tesla');
// tesla.generateCar();
// tesla.generateCar();
// tesla.generateCar();
// tesla.generateCar();
// console.log(tesla);
// console.log(tesla.findCar(0));

// const porche = new Factory('Porche');
// porche.generateCar();
// porche.generateCar();
// console.log(porche);
// console.log(porche.findCar(0));

