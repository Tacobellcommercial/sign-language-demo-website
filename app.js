const express = require("express");
const bodyParser = require("body-parser");

app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")
app.use(express.static("public"));

app.get("/", (req, res)=>{
  res.redirect("/home");
})

app.get("/home", (req, res)=>{
  res.render("Home", {
    title: "Home - AI Sign Language Model"
  })
})


app.get("/download", (req, res)=>{
  res.render("Download", {
    title: "Download - AI Sign Language Model"
  })
})


app.get("/about", (req, res)=>{
  res.render("About", {
    title: "About - AI Sign Language Model"
  })
})

app.listen(process.env.PORT, ()=>{
  console.log("Listening on Port 3000");
})
