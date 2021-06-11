function myFunction() {
  var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1&origin=*';

  fetch(
    // Make a fetch request to Wikipedia to get a random article title
    wikiUrl
    //
  )
    .then(function(wikiResponse) {
      return wikiResponse.json();
    })
    .then(function(wikiResponse) {
      console.log(wikiResponse);
      // Create a variable to hold the title of the Wikipedia article
      var title = wikiResponse.query.random[0].title;
      //
      // Display the article title above the GIF as a <h2> heading
      var header = document.querySelector("#response-header");
      header.innerHTML = "<h2>" + title + "</h2>";
      //
      // Return a fetch request to the Giphy search API with the article title and rating parameters

    var rating = document.getElementById('rating').value;
    var endPoint = "https://api.giphy.com/v1/gifs/";
    var apiKey = "HvaacROi9w5oQCDYHSIk42eiDSIXH3FN";
      
    return fetch(
        endPoint + "search?q=" + title + "&rating=" + rating + "&api_key=" + apiKey
      );
      // Remember to add your API key at the end
    })
      .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      if (response.data.length === 0) {
        console.log('Giphy could not find anything for that.');
      } else {
        var lengthGif = response.data.length;
        var randomGif = Math.floor(Math.random() * (lengthGif));
        console.log(response.data[randomGif]);
        var responseContainerEl = document.querySelector('#response-container');
        responseContainerEl.innerHTML = '';
        var gifImg = document.createElement('img');
        gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
        responseContainerEl.appendChild(gifImg);
      }
    });
}
