const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");
const port = 3000;
const route = require("./routes");
const db = require("./config/db");
//COnsole.log

db.connect();
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

//Đây là function use để viết middleware cho phương thức Post
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//Đây là bộ định tuyến

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
