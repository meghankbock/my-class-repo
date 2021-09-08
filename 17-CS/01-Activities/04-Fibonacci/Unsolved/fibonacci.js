// Linear Approach
const linear = num => {
  // Implement the Fibonacci algorithm using the linear approach
  
  // if num <= 2
  // return 1 (the first two numbers in sequence)
  if (num <= 2) {
    return 1;
  }
  
  // create new array with [1, 1]
  numArray = [1,1];
  
  // loop from i = 2 to num
  // push [i - 1] + [i - 2] to array
  for(let i = 2; i <= num; i++) {
    numArray.push(numArray[(i - 2)] + numArray[(i - 1)])
  }
  
  console.log(numArray);
  // return last item in array
  return numArray[(num-1)];
};

const recursive = num => {
  if (num <= 2) return 1;
  return recursive(num - 1) + recursive(num - 2);
}

console.log(linear(10)); // => 55

module.exports = { linear, recursive }

