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

class Character {
    constructor (name, age, eyes, hair) {
      this.legs = 2;
      this.arms = 2;
      this.name = name;
      this.age = age;
      this.eyes = eyes;
      this.hair = hair;
    }
    greet (otherCharacter) {
      console.log('hi ' + otherCharacter + '!');
    }
    smite () {
      console.log('I smite thee you vile person');
    }
  }
  
  const me = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown');
  console.log(me);
  