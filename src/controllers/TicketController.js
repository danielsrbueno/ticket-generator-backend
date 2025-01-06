const Ticket = require('../models/TicketData')

module.exports = {
    async create(req, res) {
        try {
            const { userName, userEmail, userGithub } = req.body

            if (!userName || !userEmail || !userGithub) 
                return res.status(400).json({ error: "Missing required fields." })

            const ticketCount = await Ticket.countDocuments()
            const ticketId = userName.split(" ")[0].toLowerCase()+ "-" + (ticketCount + 1001).toString() 

            const ticket = await Ticket.create({
                userName,
                userEmail,
                userGithub,
                ticketId
            })

            return res.status(201).json(ticket || { error: "Ticket not created." })
        }
        catch (error) { 
            console.log(error)
            return res.status(500).json({ error: "Internal server error." })
        }
    },

    async read(req, res) {
        try {
            const { id, userName } = req.query

            if (!id || !userName) 
                return res.status(400).json({ error: "Ticket ID is required." })
            
            const ticket = await Ticket.findOne({ ticketId: `${userName}-${id}` })

            if (!ticket) 
                return res.status(404).json({ error: "Ticket not found." })
    
            return res.status(200).json(ticket)
        }
        catch (erro) {
            console.log(erro)
            return res.status(500).json({ error: erro })
        }
    }
}