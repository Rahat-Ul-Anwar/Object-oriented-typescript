
//keyof guard

type AlphaNumericType = string | number;

const add = (param1: AlphaNumericType, param2: AlphaNumericType) => {
    
    if (typeof param1 == 'number' && typeof param2 == 'number') {
        
        
        return param1 + param2; 
       
    }

    else {
        return param1.toString() + param2.toString();
    }

}
  

add('1', '2');
add(1, 2);

//in guard (in used in a object)

type NormalUserType = {
    name: string;
}

type AdminUserType = {
    name: string;
    role: 'admin'
};

const normalUser1: NormalUserType = {
    name: "Rahat"
}

const adminUser1: AdminUserType = { name: 'Mr X', role: 'admin' };

const getUser = (user: NormalUserType | AdminUserType):string =>{
    
    if ('role' in user) {
        return `I am an admin and my role is ${user.role}`
    }

    else {
        return `I am a normal user`;
    }
}

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));

//instance of guard

class Animal1 {
    name: string;
    species: string

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
        
    }

    makeSound() {
       
        console.log("I am making sound");

    }

}

class Dog extends Animal1 {

    constructor(name: string, species: string) {
        super(name, species);
        
    }

    makeBark() {
        console.log("I m Barking");
    }
}

class Cat extends Animal1 {
    constructor(name:string, species:string) {
          super(name, species)
    }

    makeMew() {
        console.log('I am Mewing');
    }
}

function isDog(animal:Animal1):animal is Dog {
    return animal instanceof Dog
}

function isCat(animal: Animal1): animal is Cat {
    return animal instanceof Cat
}

function getAnimal(animal: Animal1):void {
    if (isCat(animal)) {
        animal.makeMew();
        
    }

   else if (isDog(animal)) {
        animal.makeBark();
    }
    else {
        animal.makeSound();
    }
}

const dog1 = new Dog('Jerman Shepard', 'dog'); //instance of dog
const cat1 = new Cat('persina cat', 'cat');
dog1.makeSound();