const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));


app.get("/",(req,res) => {
    res.render("home");
})

app.get("/about",(req,res) => {
    res.render("about");
})

app.get("/contact",(req,res) => {
    res.render("contact");
})

app.get("/campaing",(req,res) => {
    res.render("campaing");
})

app.get("/register",(req,res) => {
    res.render('register');
})

app.get("/login",(req,res) => {
    res.render('login');
})



app.listen(3000,function(){
    console.log("Server Startes on 3000 port.");
})