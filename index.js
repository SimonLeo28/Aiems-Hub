import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import connectToDB from "./db.js"

const app = express()
const port = 3000;

const contactSchema = new mongoose.Schema({
  Name: {
      type: String,
      required: true,
  },
  Email: {
      type: String,
      required: true,
  },
  Message: {
      type: String,
      required: true,
  }
})

const contactModel = mongoose.model('contact',contactSchema);

// Connect to MongoDB
connectToDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended : true}))

app.get("/", (req, res) => {
    res.render("index", { active: "home" });
  });
  
  app.get("/materials", (req, res) => {
    res.render("materials", { active: "materials" });
  });
  
  app.get("/contact", (req, res) => {
    res.render("contact", { active: "contact" });
  });

  app.get("/basicscience", (req, res) => {
    res.render("basic-science", { active: "basic-science" });
  });

  app.get("/cse", (req, res) => {
    res.render("cse", { active: "cse" });
  });

  app.get("/ece", (req, res) => {
    res.render("ece", { active: "ece" });
  });

  app.get("/civil", (req, res) => {
    res.render("civil", { active: "civil" });
  });

  app.get("/Mech", (req, res) => {
    res.render("mech", { active: "mech" });
  });


app.post("/submit-form" , async (req,res) => {
  try {
    const data = req.body;
    const response = await contactModel.create(data)
    console.log(response)
    const status = true
    res.render("contact",{ stats: status , active: "contact" })
  } catch (error) {
      res.status(500).send({message: 'Oops Error!!!'})
  }
})

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});