// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

let express = require('express');
const bodyParser = require('body-parser');


// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
let app = express();

// Use ejs as the app's view engine
app.set('view engine', 'ejs');

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.


// These will change depending on your app
app.get("/", function(req,res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  if (currentDay === 0) {
    day = "Sunday";
  }  else if (currentDay === 1) {
    day ="Monday";
  } else if (currentDay === 2) {
    day ="Tuesday";
  } else if (currentDay === 3) {
    day ="Wednesday";
  } else if (currentDay === 4) {
    day ="Thursday";
  } else if (currentDay === 5) {
    day ="Friday";
  } else {
    day ="Saturday";
  }

  // From EJS documentation res.render method, ejs filename with key/value pair
  res.render("list", {kindOfDay: day})

});

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
