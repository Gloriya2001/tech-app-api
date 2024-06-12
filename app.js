const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express())


app.post("/add",(req,res)=>{

res.send("Hai")

})




app.post("/search",(req,res)=>{

res.send("hello")

})





app.post("/delete",(req,res)=>{

res.send("Success")

})





app.post("/view",(req,res)=>{
res.send("view")

})



app.listen(8080,(req,res)=>{

    console.log("server started")

})