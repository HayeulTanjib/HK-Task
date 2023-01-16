require('dotenv').config();

module.exports = uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@hk-team.szvfbh9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

