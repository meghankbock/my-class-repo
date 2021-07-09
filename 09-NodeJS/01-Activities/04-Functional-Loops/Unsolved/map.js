const originalArray = [1, 7, 4, 5, 10];

const doubledArray = originalArray.map((data) => {
  return data * 2;
});

console.log(originalArray);
console.log(doubledArray);

// 1. A map that triples the `originalArray` and sets the result equal to a new array `tripledArray`
//
const tripledArray = originalArray.map((data) => {
  return data * 3;
});
//
console.log(tripledArray);

// 2. A map that takes the `originalArray` and returns a new array `oddOrEven` containing the text "even" if the number is even and the text "odd" if the number is odd
//
/*const oddOrEven = originalArray.map((data) => {
  let type = '';
  if(data%2) {
    type = 'odd';
  }
  else {
    type = 'even';
  }
  return type;
});*/

const oddOrEven = originalArray.map((data) => (data%2 ? "odd" : "even"));
//
console.log(oddOrEven);

// Bonus: Use arrow functions as callbacks!
