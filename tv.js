var axios = require("axios");
var fs = require("fs");

// Create the TV constructor
var TV = function() {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\r\n------------------------------------------------------------\r\n\r\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findShow = function(show) {
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    axios.get(URL).then(function(response) {
      // Place the response.data into a variable, jsonData.
      var jsonData = response.data;

      // showData ends up being the string containing the show data we will print to the console
      var showData = [
        "Show: " + jsonData.name,
        "Genre(s): " + jsonData.genres.join(", "),
        "Rating: " + jsonData.rating.average,
        "Network: " + jsonData.network.name,
        "Summary: " + jsonData.summary
      ].join("\r\n\r\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", showData + divider, function(err) {
        if (err) throw err;
        console.log(showData);
      });
    })
    .catch(function(error){
        console.log("Issue with finding this show. Try again!");
    });
  };

  this.findActor = function(actor) {
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;

    axios.get(URL).then(function(response){
        var jsonData = response.data[0].person;
        // Append the actor's name, birthday, gender, country, and URL to the `log.txt` file
        var actorData = [
            "Actor: " + jsonData.name,
            "Birthday: " + jsonData.birthday,
            "Gender: " + jsonData.gender,
            "Country: " + jsonData.country.name,
            "URL: " + jsonData.url
        ].join("\r\n\r\n");

        // Append actorData and the divider to log.txt, print showData to the console
        fs.appendFile("log.txt", actorData + divider, function(err) {
            if (err) throw err;
            console.log(actorData);
        });
    })
    .catch(function(error){
        console.log("Issue with finding this actor. Try again!");
    });

  };
};

module.exports = TV;
