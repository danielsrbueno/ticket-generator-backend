const mongoose = require('mongoose');

const user = process.env.DB_USER
const pass = process.env.DB_PASS
const dbName = process.env.DB_NAME

const config = `mongodb+srv://${user}:${pass}@${dbName}.mt53o.mongodb.net/?retryWrites=true&w=majority&appName=${dbName}`

const con = mongoose.connect(config, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = con