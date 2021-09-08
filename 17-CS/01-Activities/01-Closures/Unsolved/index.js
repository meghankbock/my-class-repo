const name = 'Kim';

function person() {
  const name = 'Lee';

  // Return a function called `displayName()` with access to the `name` variable
 return function displayName() {
    console.log('displayName');
  }
  //
}

// Invoke `displayName()` in order to print "Lee" in the console

let sayMyName = person();
console.log(name);

console.log(person());

