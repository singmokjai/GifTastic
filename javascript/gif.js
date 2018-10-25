// Initial array of Gifs to pre-populate starter buttons
var starterGifs = [corgi, nba, food, ramen, minions, hong kong, coffee];

function displayGifs() {

    var starterGifs = $(this).attr("gif-name");

    // API KEY: Fc0RKS4GK84HJ3Fpuc7jJ0kArJN1IEBN
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + starterGifs + "&api_key=Fc0RKS4GK84HJ3Fpuc7jJ0kArJN1IEBN";

    // Create AJAX call for Gifs clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)
    })

}