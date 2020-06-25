require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const favicon = require('serve-favicon');
var methodOverride = require('method-override');
var sassMiddleware = require('node-sass-middleware');

const User = require('./models/user');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const recipesRouter = require('./routes/recipes');
const commentsRouter = require('./routes/comments');

const app = express();

//mongooseDB connect
mongoose
  .connect("mongodb://localhost:27017/okit", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("database connected");
  })
  .catch(err => {
    console.log("Could not connect", err);
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup public assets directory 
app.use(express.static(path.join(__dirname, 'public')));


//basic boilrerplate config
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, '/scss'),
  dest: path.join(__dirname, '/public/stylesheets'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true,
  outputStyle: "compressed",
  debug: true,
  force: true
}));
app.use(methodOverride('_method'))

//session config
app.use(session({
  secret: 'okit application',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//passport config
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//mount routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/recipes', recipesRouter);
app.use('/recipes/:recipe_id/comments', commentsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
