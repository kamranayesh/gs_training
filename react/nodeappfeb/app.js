console.log("APPLICATION STARTED");
//http-erros generates errors for the application to throw. u should read more abt
//it in the npm documetation of http-errors. means search npm http-errors and visit the page
var createError = require("http-errors");
//we are including the express
var express = require("express");
//this is path library for path manipluations
var path = require("path");
//cookie parser is used to parse cooking.(parsing means reading)
var cookieParser = require("cookie-parser");
//morgan is a loggers. loggers are used to log data for application like which user logged in,
//what actions user did etc. means we can log that data meaning that all this data will be stored
//in a file and we can read it to analyze the applicaiton usage etc.
//for ex: if somewhere error occurs then we can log that also. it basically contains information
//about what is happening in the system.
var logger = require("morgan");
const mongoose = require("mongoose");
const session = require("express-session");
//Router are modules where we define routes of the application.you can define different routes
//like /login or /products etc
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productsRuter = require("./routes/products");
var todoRouter = require("./routes/todo");
var authorRouter = require("./routes/author");
const bookRouter = require("./routes/book");
const cookieRouter = require("./routes/cookie");
const sessionRouter = require("./routes/session");
const jwtRouter = require("./routes/jwt");
var app = express();

let mongoConnUrl = "mongodb://localhost/marchnode22";
mongoose.connect(mongoConnUrl, { useNewUrlParser: true });
let db = mongoose.connection;
db.on("error", function (error) {
  console.log("Error came in connecting" + error);
});
db.on("open", function () {
  console.log("yes, we are connected to mongodb and the database");
});

app.use(
  session({
    secret: "session_secret_key",
    resave: true,
    saveUnitialized: true,
    cookie: {
      secure: false,
    },
  })
);
// view engine setup
//we use templating here. we are telling app variable which is express object to set the folder
//where we will keep our views.
app.set("views", path.join(__dirname, "views"));
//here we are telling express app to use pug templating engine.
app.set("view engine", "pug");
//we are telling express to use logger we defined above.dev means that we are loggin data
//for development
app.use(logger("dev"));
//we are now telling express that we will also use json data for api
app.use(express.json());
//we use this setting to read post data.
app.use(express.urlencoded({ extended: false }));
//we are telling express to use cookie parser
app.use(cookieParser());
//we are telling express to use static directory as public.means what?
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRuter);
app.use("/todos", todoRouter);
app.use("/author", authorRouter);
app.use("/book", bookRouter);
app.use("/cookie", cookieRouter);
app.use("/session", sessionRouter);
app.use("/jwt", jwtRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
