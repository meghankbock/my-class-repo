const beverage = function() {
  // Create 3 variables for the `type`, `price`, and `origin` of the beverage
  // Assign them to values of your choice
  let type = 'coffee';
  let price = 5;
  let origin = 'Costa Rica';
  //

  // Return an object literal which contains the methods `product()`, `amount()`, and `place()`
  return {
    // `product()` will print an invitation to drink the `type` of beverage
    product: function() {
      console.log(`Would you like a ${type}?`);
    },
    //
    // `amount()` will print out the `price` of the beverage
   amount: function() {
     console.log(`The ${type} will cost $${price}`);
   },
    //
    // `place()` will print out the `origin` of the beverage
    place: function() {
      console.log(`The ${type} is from ${origin}`);
    }
    //
  };
};

const drink = beverage();
// Invoke the 3 methods
drink.product();
drink.amount();
drink.place();
//
