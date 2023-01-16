const express = require("express");
const server = express();
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const uri = require('./mongo-config');
const port = 5000;

//middleware
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

//model
const Sector = mongoose.model("sectors", sectorsSchema);
const User = mongoose.model("userdatas", userDataSchema)

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


server.post('/userdata', async(req, res) => {
    try {
        const userData = ({name: "John", sectors: ['apple', 'orange'], isAgree: true});
        const newUserData = new User(userData);
        const value = await newUserData.save();
        res.status(201).send(value);
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})


