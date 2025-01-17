import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"

const app = express()
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended : true}))

app.get("/", (req, res) => {
    res.render("index", { active: "home" });
  });
  
  app.get("/materials", (req, res) => {
    res.render("index", { active: "materials" });
  });
  
  app.get("/contact", (req, res) => {
    res.render("index", { active: "contact" });
  });


app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});