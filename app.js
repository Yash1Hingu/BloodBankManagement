const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

const USEREMAIL = 'yash23@gmail.com';
const USERPASSWORD = 'yash123';
let ADMININ = false;

app.get("/",(req,res) => {
    res.render("home",{adminhome:ADMININ});
})

app.get("/about",(req,res) => {
    res.render("about",{adminhome:ADMININ});
})

app.get("/contact",(req,res) => {
    res.render("contact",{adminhome:ADMININ});
})

app.get("/campaing",(req,res) => {
    res.render("campaing",{adminhome:ADMININ});
})

app.get("/register",(req,res) => {
    res.render('register',{adminhome:ADMININ});
})

app.get("/login",(req,res) => {
    res.render('login',{adminhome:ADMININ});
})

app.post("/loginuser",(req,res) => {
    const useremail = req.body.useremail;
    const userpassword = req.body.userpassword;

    if(useremail === USEREMAIL && userpassword === USERPASSWORD) {
        ADMININ = true;
        res.render('home',{adminhome : ADMININ});
    }
})

app.get("/logout",(req,res) => {
    ADMININ = false;
    res.render('home',{adminhome:ADMININ});
})



app.listen(process.env.PORT || 3000,function(){
    console.log("Server Startes on 3000 port.");
})