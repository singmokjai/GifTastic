// Initial array of Gifs to pre-populate starter buttons
var starterGifs = ["Corgi", "NBA", "Food", "Ramen", "Minions", "Hong Kong", "Coffee"];

function displayGifs() {

    var starterGifs = $(this).attr("gif-name");

    // API KEY: Fc0RKS4GK84HJ3Fpuc7jJ0kArJN1IEBN
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + starterGifs + "&api_key=Fc0RKS4GK84HJ3Fpuc7jJ0kArJN1IEBN&limit=10";

    // Create AJAX call for Gifs clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
    
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
        // Dynamically create and append corresponding results from array to variables

        var gifDiv = $("<div class = 'gifs'>");

        var rating = results[i].rating;

        var pRate = $("<p>").text("Rating: " + rating);

        var gifURL = results[i].images.fixed_height.url;

        var gif = $("<img>").attr("src", gifURL);

        gifDiv.append(gif);

        gifDiv.append(pRate);
        
        $("#gifSection").append(gifDiv);
    }
    })

}

    // Function for clearing buttons to prevent repeats

    function clearGifs() {

    $("#gifButtons").empty();

    for (var i = 0; i < starterGifs.length; i++) {
        // Dynamically create buttons
        var g = $("<button>");
        // Add gif class to button
        g.addClass("gif");
        // Add gif attribute
        g.attr("gif-name", starterGifs[i]);
        // Add text to gif button
        g.text(starterGifs[i]);
        // Add button to gifButtons div
        $("#gifButtons").append(g);

    }
}

    // Function for when add gif button is clicked

    $("#add-gif").on("click", function(event) {
        // Grap input from textbox
        event.preventDefault();

        var gif = $("#gify").val().trim();

        // Add gif from textbox to starterGif array

        starterGifs.push(gif);

        // Call clearGifs to process array

        clearGifs();
    });

    // Add event listeners with class "gif"

    $(document).on("click", ".gif", displayGifs);

    // Call clearGifs to display initial buttons

    clearGifs();

    $(document).on("click", ".gif", ()=> {
        
        $("#gifSection").empty().displayGifs();
    
    })

    



