const listEl = document.querySelector('#grocery-list');
const shoppingCartEl = document.querySelector('#shopping-cart');
const fruits = ['Bananas', 'Apples', 'Oranges', 'Grapes', 'Blueberries'];

// Create an event listener on the common parent element of the groceries
listEl.addEventListener('click', function(event) {
    event.preventDefault();
    if(event.target.matches('button')) {
        const newDiv = document.createElement('div');
        console.log("id: " + event.target.parentElement.id);
        newDiv.textContent = fruits[event.target.parentElement.id];
        shoppingCartEl.appendChild(newDiv);
    }
});
//
// Inside the closure, for every click of the button, create a `div` element
// that will hold the name of the fruit
// and append it to the shopping cart
//
