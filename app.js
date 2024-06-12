const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const { techmodel } = require("./models/tech")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://gloria2001:gloria2001@cluster0.ipg35w1.mongodb.net/techDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add", (req, res) => {

    let input = req.body
    let tech = new techmodel(input)
    tech.save()
    console.log(tech)
    res.json({ "status": "sucess" })


})




app.post("/search", (req, res) => {

    res.send("hello")

})





app.post("/delete", (req, res) => {



})





app.post("/view", (req, res) => {


    techmodel.find().then(

        (data) => {
            res.json(data)
        }


    ).catch()

})



app.listen(8080, (req, res) => {

    console.log("server started")

})