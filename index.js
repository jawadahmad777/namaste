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
/////////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/order", (req, res) => {
  console.log(" req body is ", req.body);
  db.orders(
    req.body.name,
    req.body.email,

    req.body.address,
    req.body.phone
  )
    .then(results => {
      db.getOrders(req.body.orders).then(price => {
        console.log(price);
      });
      // req.session.isLoggedIn = true;
      // console.log(results);
      // req.session.userId = results.id;
      // res.json({
      //   success: true,
      //   message: "User created successfully"
      // });
    })
    .catch(err => {
      console.log(err);
    });
});

///
///
//
//
app.post("/order", (req, res) => {
  console.log(" req body is ", req.body);
  // if (
  //   req.body.name == "" ||
  //   req.body.email == "" ||
  //   req.body.password == "" ||
  //   req.body.address == "" ||
  //   req.body.phone == ""
  // ) {
  //   res.json({
  //     success: false,
  //     message: "Please Fill in the whole fields"
  //   });
  // } else {
  //   db.checkEmail(req.body.email).then(results => {
  //     if (results.length == 0) {
  //       bcrypt
  //         .hashPassword(req.body.password)
  //         .then(hashedPassword => {
  db.orders(
    req.body.name,
    req.body.email,

    req.body.address,
    req.body.phone
  )
    .then(results => {
      req.session.isLoggedIn = true;
      console.log(results);
      req.session.userId = results.id;
      res.json({
        success: true,
        message: "User created successfully"
      });
    })
    .catch(err => {
      console.log(err);
    });
  // })

  //   } else {
  //     req.session.loggedIn = false;
  //     res.json({
  //       success: false,
  //       message: "Duplicate Email found, Please use another email address"
  //     });
  //   }
  // });
  //  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
  console.log("I'm listening.");
});
