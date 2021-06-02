// Create your HTML Page via DOM Methods here!

var body = document.body;

// TODO: Add a centered h1
var h1El = document.createElement("h1");
h1El.textContent = "Meghan's Favorite Food";
h1El.style.textAlign = "center";
body.appendChild(h1El);

// TODO: Add a centered h2
var h2El = document.createElement("h2");
h2El.textContent = "A list of Meghan's Favorite Food";
//h2El.style.textAlign = "center";
h2El.setAttribute('style', 'text-align: center');
body.appendChild(h2El);

// TODO: Add a centered image with a centered caption under it
var divEl = document.createElement("div");
divEl.innerHTML = "<img>";
divEl.style.alignContent = "center";
body.appendChild(divEl);

// TODO: Add a list of your favorite foods (or other favorites)
var listDivEl = document.createElement("div");
var listEl = document.createElement("ul");
var listItemEl = document.createElement("li");
listItemEl.textContent = "pizza";
listEl.appendChild(listItemEl);
var listItemEl2 = document.createElement("li");
listItemEl2.textContent = "mexican food";
listEl.appendChild(listItemEl2);
body.appendChild(listEl);

