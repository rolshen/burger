const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const app = express();

var port = process.env.PORT || 8060;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgersController.js");
app.use("/", routes);


app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
