class Animal {

    // public name: string;
    // public species: string;
    // public sound: string;

  //parameter properties
    constructor(public name: string,  species: string, sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
        
    }

    public makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const dog = new Animal('German Shepard', 'dog', 'Ghew Ghew');

const cat = new Animal('persian', 'cat', 'mew mew');
cat.makeSound();
dog.makeSound();
cat.name= 'special cat';