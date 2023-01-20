const express = require("express");
const server = express();
const cors = require('cors');
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const uri = require('./mongo-config');
const port = 5000;

//middleware
server.use(cors())
server.use(express.json());
server.use(express.urlencoded({extended: true}));

//DB connection
const connectDB = async() => {
    try {
        await mongoose.connect(uri);
        console.log("DB Connected");
    } catch (error) {
        console.log(error.message);
        process.emit(1);
    }
}

//Server Listenting Port
server.listen(port, async() => {
    console.log(`Server is running: ${port}`);
    await connectDB();
});


//schema
const sectorsSchema = new mongoose.Schema({
    category: {
        type: String,
        required: [true, "sector category is required"]
    },
    subCategory: {
        type: Array,
        required: [true, "sector subcategories are required"]
    }
})

const userDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    sectors: {
        type: Array,
        required: [true, "sectors are required"]
    },
    isAgree: {
        type: Boolean,
        required: [true, "agreement is required"]
    }

})

//models
const Sector = mongoose.model("sectors", sectorsSchema);
const User = mongoose.model("userdatas", userDataSchema);

//GET sectors
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

//POST userdata
server.post('/userdata', async(req, res) => {
    try {
        const userData = (req.body);
        const newUserData = new User(userData);
        const value = await newUserData.save();
        res.status(201).send(value);
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

//GET userdata
server.get("/userdata", async(req, res) => {
    try {
        const usersdata = await User.find();
        usersdata ? res.status(200).send({
            success: true,
            message: "return all usersdata",
            data: usersdata
        }):
        res.status(404).send({
            success: false,
            message: "usersdata not found"
        });

    } catch (error) {
        res.status(500).send({message: error.message});
    }
})
