//complete this code
class Animal {
	constructor(species){
		this.species = species;

		get makesSound(){
			consp0le.log(`The ${this.species} makes a sound`)
		}
	}
}

class Dog extends Animal {
     super(species)

	 function purr(){
		 console.log("purr");
	 }
	
}

class Cat extends Animal {
	
	function bark(){
		 console.log("woof");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
