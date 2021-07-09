const originalArray = [1, 5, 8, 3, 10];

const evenNumbers = originalArray.filter(function(data) {
  if (data % 2 === 0) {
    return true;
  }
});

console.log("original array: " + originalArray);
console.log("even numbers: " + evenNumbers);

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

// Complete the following

// 1. A filter that runs through the `originalArray` and creates a new array `primeArray` containing only its prime numbers
// Use the `isPrime` function provided above to help with this
//
/*const primeArray = originalArray.filter(function(data) {
  if(isPrime(data) == false) {
    return false;
  }
  else {
    return true;
  }
});*/

//const primeArray = originalArray.filter((data) => (isPrime(data) == false ? false : true));

const primeArray = originalArray.filter(isPrime);
//
console.log("prime numbers: " + primeArray);

// 2. A filter that runs through the `originalArray` and creates a new array `moreThan5Array` containing only its numbers larger than 5
//
/*const moreThan5Array = originalArray.filter(function(data) {
  if(data > 5) {
    return true;
  }
  else {
    return false;
  }
});*/

//const moreThan5Array = originalArray.filter(data => (data > 5 ? true : false));

const moreThan5Array = originalArray.filter(data => (data > 5));
//
console.log("more than 5 array: " + moreThan5Array);

// Bonus: Use arrow functions as callbacks!
