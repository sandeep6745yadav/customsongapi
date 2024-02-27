const express =require("express");
const mongoose = require("mongoose");

 
const songSchema = new mongoose.Schema ({


    title :{type:String, required:true},
    link :{type:String,required:true},
    imagelink :{type:String,required:true},
    artist :{type:String,required:true},
}) 
const song =  new mongoose.model('song',songSchema);
module.exports =song;