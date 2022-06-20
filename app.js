// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');
const bodyParser = require('body-parser');


// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
const app = express();

// Set empty variable for user input value
let items = ["Buy Food", "Cook Food", "Eat Food"];

// Use ejs as the app's view engine
app.set('view engine', 'ejs');

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.


// These will change depending on your app
app.get("/", function(req,res) {
  let today = new Date();
  
  // https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  // From EJS documentation res.render method, ejs filename with key/value pair
  res.render("list", {kindOfDay: day, newListItems: items});

});

// Get user input from input form (web page) and pass to server
app.post("/", function(req, res) {
  let item = req.body.newItem;
  // Add the new item from the user input into an array
  items.push(item);
  res.redirect("/");
});

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
