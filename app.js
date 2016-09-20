var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.render('index', {title: "Welcome"});
});
app.get("/about", function(req, res){
    res.render('about', {title: "About us"});
});
app.get("/contact", function(req, res){
    res.render('contact');
});
app.post("/contact/send", function(req, res){
    console.log("Text submmt");
});


app.listen(3000);
console.log("Server is running on port 3000");


