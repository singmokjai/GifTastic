// Initial array of Gifs to pre-populate starter buttons
var starterGifs = ["corgi", "nba", "food", "ramen", "minions", "hong kong", "coffee"];

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

    // Function for showing Gifs

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

