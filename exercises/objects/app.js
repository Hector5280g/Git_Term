const myPet= {
    name : "Frijol",
    age : 12 ,
    favorite : "pizza",
    canSpeakFrench :false ,
    }
    console.log(myPet);
    
    class Vehicle {    
        constructor(vin, make, model) {        
            this.vin = vin;        
            this.make = make;
            this.model = model;   // return is not needed    
            // because the new object is returned by default    
        }
    }
    
    const myFirstCar = new Vehicle ("ihaufhiwuahukd", "Subaru", "outback");
    console.log(myFirstCar);
    