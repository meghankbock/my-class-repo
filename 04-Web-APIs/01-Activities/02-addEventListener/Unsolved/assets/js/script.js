// TODO: Create a variable to hold the count
var count = 0;

// TODO: Create variables to select the increment button, decrement button and count heading by their respective ids.
var incBtnEl = document.querySelector('#increment');
var decBtnEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');
var h1El = document.querySelector('h1');
h1El.style.textAlign = "center";

// TODO: Create a function that displays the current count on the page
var display = function () {
    countEl.textContent = count;
}

// TODO: Create an addEventListener that will increment the count on click
// and calls the function to display the current count
var incrementHandler = function() {
    count += 1;
    display();
}

// TODO: Create an addEventListener that will decrement the count on click
var decrementHandler = function() {
    if(count > 0) {
    count -= 1;
    }
    else {
        count = 0;
    }
    display();
}
// and calls the function to display the current count

incBtnEl.addEventListener("click", incrementHandler);
decBtnEl.addEventListener("click", decrementHandler);
