const mongoose = require('mongoose');
require('dotenv').config();

const user = process.env.DB_USER
const password = process.env.DB_PASS
const dbName = process.env.DB_NAME

const config = `mongodb+srv://${user}:${password}@${dbName}.mt53o.mongodb.net/?retryWrites=true&w=majority&appName=${dbName}`

const con = mongoose.connect(config, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = con