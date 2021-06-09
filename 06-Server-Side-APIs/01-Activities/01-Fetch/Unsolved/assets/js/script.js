// Write a fetch request to the Giphy API
var getGiphy = function() {
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN").then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        })
    })
}
// Then log the response in the console

getGiphy();