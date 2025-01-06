const mongoose = require('mongoose');

const user = process.env.DB_USER
const pass = process.env.DB_PASS
const dbName = process.env.DB_NAME

const config = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_NAME}.mt53o.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DB_NAME}`

const con = mongoose.connect(config, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = con