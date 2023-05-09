class Person{
    takeNap() {
        console.log('I am sleeping * hours per day');
    }
}

class Student extends Person {

    takeNap(): void {
        console.log('I am sleeping 10 hours per day');
    }
    
}

class Developer extends Person{
    takeNap(): void {
        console.log('I am sleeping 5 hours');
    }
}

function getNap(param: Person) {
    param.takeNap();

}

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();


getNap(person1);
getNap(person2);
getNap(person3);

// polymorphisom means same method but different different output...

class Shape {
    getArea(): number {
        return 0;

    }
}

class Circle extends Shape {
    radius: number; 

    constructor(radius: number) {
        super();
        this.radius = radius;
       
        
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape{

    height: number;
    width: number;
    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return this.height * this.width;
    }
}

function getAreaOfShape(param:Shape) {
    param.getArea();
};

// const shape = new Shape();
const circle = new Circle(5);
const rectangle = new Rectangle(5,10);

//                      
getAreaOfShape(circle);
getAreaOfShape(rectangle);