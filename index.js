const express = require("express");
const app = express();
const path = require("path");
const bcrypt = require("./db/bcrypt");
const cookieSession = require("cookie-session");
const db = require("./db/db.js");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const compression = require("compression");

app.use(compression());

if (process.env.NODE_ENV != "production") {
  app.use(
    "/bundle.js",
    require("http-proxy-middleware")({
      target: "http://localhost:8081/"
    })
  );
} else {
  app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.use(express.static(__dirname + "/public"));

app.use(
  cookieSession({
    secret: `I'm always angry.`,
    maxAge: 1000 * 60 * 60 * 24 * 14
  })
);
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
  console.log("I'm listening.");
});
