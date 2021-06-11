// Create a function called `myFunction()`
var myFunction = function() {
//
// Create a variable that will use `document.querySelector()` to target the `id` of the input 
// Use `.value` to capture the value of the input and store it in the variable
var searchTerm = document.querySelector("#searchTerm").value.trim;
var endPoint = "https://api.giphy.com/v1/gifs/";
var apiKey = "HvaacROi9w5oQCDYHSIk42eiDSIXH3FN"
//
// Make a `fetch` request concatenating that variable to the query URL
// Remember to add your API key at the end
var apiUrl = endPoint + "search?q=" + searchTerm + "&api_key=" + apiKey;

fetch(apiUrl)
.then(function(response) {
  return response.json();
})
.then(function(response) {
  console.log(response.data[0]);
  // Create a variable that will select the <div> where the GIF will be displayed
  var imgContainer = document.querySelector("#response-container");
  //
  // Empty out the <div> before we append a GIF to it
  imgContainer.textContent = "";
  //
  var gifImg = document.createElement('img');
  gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
  console.log(gifImg);
  
  // Append 'gifImg' to the <div>
  imgContainer.appendChild(gifImg);
  //
})

}