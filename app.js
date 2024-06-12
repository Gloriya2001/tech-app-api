const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const { techmodel } = require("./models/tech")

const app = express()
app.use(cors())
app.use(express.json())


app.post("/add", (req, res) => {

    let input = req.body
    let tech =  new techmodel(input)
    tech.save()
    console.log(tech)
    res.json({ "status": "sucess" })


})




app.post("/search", (req, res) => {

    res.send("hello")

})





app.post("/delete", (req, res) => {

    res.send("Success")

})





app.post("/view", (req, res) => {
    res.send("view")

})



app.listen(8080, (req, res) => {

    console.log("server started")

})