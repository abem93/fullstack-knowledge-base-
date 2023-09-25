//primatives: number, string, boolean

//more complex types: arrays, objects

//function types, parameters

// Primatives

let age: number = 24;

age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;

isInstructor = true;


// More complex types

let hobbies: string[];

hobbies = ['sports', 'cooking'];

let person: {
  name: string,
  age: number,
}; 

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

let course = "React - The Complete Guide";

//course = 12323423;