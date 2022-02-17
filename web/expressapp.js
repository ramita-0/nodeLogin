const express = require("express");
const app = express();

// define view engine
app.set("view engine", "ejs");

// para que me cargue el css
app.use(express.static(__dirname));


// listen for requests
app.listen(3000);

app.get("/", (req, res) =>{ 
    res.render("index", {user: "ramita", password:"123"});
})

app.get("/login", (req, res) =>{
    res.render("login");

})

app.get("/register", (req, res) =>{
    res.render("register");

})

app.get("/about", (req, res) =>{
    res.render("about");
})


// 404
app.use((req, res, next) => {
    res.status(404).render("404");
})