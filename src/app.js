const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here


app.get("/mario",(req,res)=>{
    marioModel.find().then((el)=>res.send(el)).catch((error)=>res.send(error))

});

app.get("/mario/:id",(req,res)=>{

    let id = req.params.id;

    marioModel.findById(id).then((mario)=>res.send(mario)).catch((error)=>res.status(400).send({message: error.message}))

});

app.post("/mario",(req,res)=>{

    let newMario = new marioModel(req.body);

    newMario.save().then(newMario => res.status(201).send(newMario)).catch((error)=>res.status(400).send({message:error.message}))

})

app.patch("/mario/:id",(req,res)=>{

    let id = req.params.id;

    let mario = req.body;

    marioModel.findByIdAndUpdate(id,mario,{'returnOriginal':false}).then(mario=> res.send(mario)).catch(error=> res.status(400).send({message: error.message}))
});

app.delete("/mario/:id",(req,res)=>{

    let id = req.params.id;

    marioModel.findByIdAndDelete(id)
    .then(()=>res.status(200).send({message: 'character deleted'})).catch(error =>res.status(400).send({message: error.message}))

});


module.exports = app;