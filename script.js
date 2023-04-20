//complete this code
class Animal {
		constructor(species){
			this.species = species;
		}
	makesound(){
		console.log(`${this.species} makes sound`);
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}

	bark(){
		super.makesound();
		console.log("woof");
	}
	
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	purr(){
		super.makesound();
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
