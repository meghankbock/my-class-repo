// Fetch request to Giphy API random endpoint
fetch(
  'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN'
)
  // Converts the response to JSON
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    //console.log(response);
    var imgUrl = response.data.image_url;
    // Use 'querySelector' to get the ID of where the GIF will be displayed
    var responseEl = document.querySelector("#response-container");
    //
    // Create an '<img>' element
    var imgEl = document.createElement("img");
    //
    // Set that element's 'src' attribute to the 'image_url' from our Giphy API response
    imgEl.setAttribute("src",imgUrl);
    console.log(imgEl);
    // Append the '<img>' element to the page
    responseEl.appendChild(imgEl);
    //
  });
