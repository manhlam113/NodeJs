const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");
const port = 3000;

//COnsole.log
app.use(morgan("combined"));

//Template Engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
