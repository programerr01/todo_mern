const express  = require("express")
const mongoose = require("mongoose")
require('dotenv').config()

const cors = require("cors")
const route = require("./routes/todoRoutes.js")
// Calling express 
const app = express()

const url =process.env.URL
console.log(process.env)
mongoose.connect(url,{ useNewUrlParser: true }, () => {
	console.log("Connected to the database");
})
	


//Using middleware to parse the body parser
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())
app.use("/post", route);


//Api endpoints 
app.get("/", (req,res)=>{
	res.json("HELLO WORLD");
})
const PORT = process.env.PORT | 5000

app.listen(PORT, () => {
	console.log("Server started successfully")
})
