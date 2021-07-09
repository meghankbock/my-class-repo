// =============================================================
// 1. Object
const arya = {
  first: 'Arya',
  last: 'Stark',
  origin: 'Winterfell'
};

// Destructure the object 'arya' so the following console.log will print successfully
//
//const first = arya.first;
//const origin = arya.origin;

const {first,last,origin} = arya;
//

console.log('first: ' + first); // <= Arya
console.log('origin: ' + origin); // <= Winterfell

// =============================================================
// 2. Nested Object
const john = {
  first: 'John',
  last: 'Snow',
  title: 'Prince',
  family: {
    brothers: {
      brother1: 'Rob Stark',
      brother2: 'Rickon Stark'
    },
    sisters: {
      sister1: 'Arya Stark',
      sister2: 'Sansa Stark'
    }
  }
};

// Destructure the object 'john' so the following console.log will print successfully
//
//const brother1 = john.family.brothers.brother1;
//const brother2 = john.family.brothers.brother2;
//
const {brother1,brother2} = john.family.brothers;

console.log('brother1: ' + brother1); // <= Rob Stark
console.log('brother2: ' + brother2); // <= Rickon Stark

// =============================================================
// 3. Arrays
const characters = ['Ned Stark', 'The Quiet Wolf', 'House Stark'];

// Destructure the array 'characters' so the following console.log will print successfully
//
//const name = characters[0];
//const alias = characters[1];
//const allegiance = characters[2];
//
const [name,alias,allegiance] = characters;

console.log(name, alias, allegiance); // <= Ned Stark The Quiet Wolf House Stark

// =============================================================
// 4. Strings
const skills = 'male, Baratheon, Cersei';

// Destructure the string 'skills' so the following console.log will print successfully
// Hint: set variables and split
//
//const gender = skills.split(', ')[0];
//const family = skills.split(', ')[1];
//const spouse = skills.split(', ')[2];
//
const [gender,family,spouse] = skills.split(', ');

console.log(gender, family, spouse); // <= male Baratheon Cersei
