// require('dotenv').config();
const express = require("express");
require("../src/db/conection");
const song =require ("../src/models/song");
const app = express();

const PORT = process.env.port || 9000;
app.use(express.json());
 
app.get("/song",async(req,res) => {
    try{
    const getsongs = await song.find({});
    res.send(getsongs);
    }catch(e){
    res.status(400).send(e);
    }
});

app.post("/song",async(req,res) =>{ 
    try{
        const addingSongRecords = new song(req.body) 
        console.log(req.body);
            const insertSong = await addingSongRecords.save(); 
        
        res.status(201).send(insertSong);
    } catch(e) {
        res.status(400).send(e);
    }
})
app.listen(PORT, () => {
    console.log(`connection is live at port no. ${PORT}`);
});