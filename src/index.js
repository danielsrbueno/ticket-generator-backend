const express = require("express")
const cors = require("cors")
const routes = require('./routes')

require('./config/dbConfig')

const app = express()

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(routes)

app.listen(port)