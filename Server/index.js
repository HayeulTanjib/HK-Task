const cors = require('cors');
const express = require('express');
const app = express();
const client = require('./mongo-config');
const port = process.env.PORT || 5000;

//middleware
app.use(cors())              
app.use(express.json())



app.get('/', (req, res) => {
    res.send("Server Ready!");
})

app.listen(port, () => {
    console.log("Listening on: ", port);
})


