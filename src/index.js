const express = require("express")
const cors = require("cors")
const routes = require('./routes')

require('./config/dbConfig')

const app = express()

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(routes)

const port = process.env.PORT || 3333

app.listen(port)