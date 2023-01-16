const cors = require('cors');
const express = require('express');
const server = express();
const mongoose = require('mongoose');
//const client = require('./mongo-config');

//middleware
server.use(cors())              
server.use(express.json())
server.use(express.urlencoded({extended: true}));



// server.get('/', (req, res) => {
//     res.send("Server Ready!");
// })

// server.listen(port, () => {
//     console.log("Listening on: ", port);
// })

// name
// productCategory
// productSubCategory
// agree terms

//schema
const sectorsSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    }
})

//model
const Sector = mongoose.model("sectors", sectorsSchema);


server.get("/sectors", async(req, res) => {
    try {
        const sectors = await Sector.find();
        sectors ? res.status(200).send({
            success: true,
            message: "return all sectors",
            data: sectors
        }):
        res.status(404).send({
            success: false,
            message: "sectors not found"
        });

    } catch (error) {
        res.status(500).send({message: error.message});
    }
})


