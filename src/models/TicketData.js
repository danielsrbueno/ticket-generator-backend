const mongoose = require('mongoose')

const TicketDataSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    userEmail: { type: String, required: true, unique: true },
    userGithub: { type: String, required: true, unique: true },
    ticketId: { type: String, required: true, unique: true },
})

module.exports = mongoose.model('Ticket', TicketDataSchema)