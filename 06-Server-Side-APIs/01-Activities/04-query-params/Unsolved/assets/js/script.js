function myFunction() {
  var searchTerm = document.getElementById('searchTerm').value;
  // Create a variable to hold the value of rating
  var rating = document.querySelector("#rating").value;
  var endPoint = "https://api.giphy.com/v1/gifs/";
  var apiKey = "HvaacROi9w5oQCDYHSIk42eiDSIXH3FN";

  fetch(
    endPoint + "search?q=" + searchTerm + "&rating=" + rating + "&api_key=" + apiKey
      // Add the rating parameter
      // YOUR CODE HERE
      //
      // Remember to add your API key
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      var length = response.data.length;

      var random = Math.floor(Math.random() * (length));
      console.log(response.data[random]);
      var responseContainerEl = document.querySelector('#response-container');
      responseContainerEl.innerHTML = '';
      var gifImg = document.createElement('img');
      gifImg.setAttribute('src', response.data[random].images.fixed_height.url);
      responseContainerEl.appendChild(gifImg);
    });
}
