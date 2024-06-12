const mongoose = require("mongoose")

const schema = mongoose.Schema(

    {

            "name":{type:String,required:true},
            "course":{type:String,required:true},
            "year":{type:String,required:true},
            "batch":{type:String,required:true},
            "rollNo":{type:String,required:true},
            "admNo":{type:String,required:true},
            "mob":{type:String,required:true},
            "dob":{type:String,required:true},
            "event":{type:String,required:true},
            "gpname":{type:String,required:true},


    }

)

let techmodel = mongoose.model("techfest",schema);
module.exports = {techmodel}

