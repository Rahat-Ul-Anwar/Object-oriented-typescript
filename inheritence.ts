class Person {
    name: string;
    age: number;
    address: string;

  
    constructor( name: string, age:number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;


    }

    makeSleep(hours:number):string {
        return `This ${this.name} will sleep for ${hours}`;
    }



}




class Student extends Person{
    // name: string;
    // age: number;
    // address: string;

    constructor(name: string, age: number, address: string) {
        super(name, age, address)
       

    }
   
}

const student1 = new Student('Mr X', 32, 'gulbag');

class Teacher extends Person {
  
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
       
        this.designation = designation;

    }

   

    takeClassed(numOfClass: number) {
        return `This ${this.name} will take ${numOfClass}`;
    }
    

}


const teacher1 = new Teacher('Mr Y', 54, 'USA', ' professor');
teacher1.