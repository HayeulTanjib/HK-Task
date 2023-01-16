const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@hk-team.szvfbh9.mongodb.net/?retryWrites=true&w=majority`;
module.exports =  client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

