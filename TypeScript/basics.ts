//primatives: number, string, boolean

//more complex types: arrays, objects

//function types, parameters

// Primatives

let age: number = 24;

age = 12;

let userName: string | string [];
userName = 'Max';

let isInstructor: boolean;

isInstructor = true;


// More complex types

let hobbies: string[];

hobbies = ['sports', 'cooking'];

type Person = {
  name: string,
  age: number,
}; 

// let person: {
//   name: string,
//   age: number,
// }; 

let person: Person;

person = {
  name: 'Max',
  age: 32
};

// person = {
//   isEmployee: true;
// }

let people: {
  name: string,
  age: number,
}[]; 

// Type inference

let course: string | number = "React - The Complete Guide";

course = 12323423;

// Functions & types

function add(a:number, b:number){
  return a + b;
}


// void, does not return anything.
function printOutput(value: any){
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T){
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1,2,3];


const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

// class Student {
//   firstName: string;
//   lastName: string;
//   age: number;
//   courses: string[];

//   constructor(first: string, last: string, age: number, courses: string[]){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.courses = courses;
//   }

//   enroll(courseName: string){
//     this.courses.push(courseName);
//   }
// }

class Student {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ){}

  enroll(courseName: string){
    this.courses.push(courseName);
  }
  listCourses(){
    return this.courses.slice();
  }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enroll('React'); 


interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let max: Human;

max = {
  firstName: 'Max',
  age: 32,
  greet() {
      console.log('Hello!');
  },
}

class Instructor implements Human{
  firstName: string;
  age: number;
  greet(){
    console.log('Hello!');
  }
}