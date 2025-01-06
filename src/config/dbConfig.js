const mongoose = require('mongoose');

const config = "mongodb+srv://danielsrbueno:z4VPi03I7u2UULhw@ticket.mt53o.mongodb.net/?retryWrites=true&w=majority&appName=ticket"

const con = mongoose.connect(config, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = con