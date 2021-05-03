const express = require("express")
const path = require("path")
const cors = require("cors")
//const router = express.Router()
require("dotenv").config()

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors())
//app.use(router)


app.post("/api", async (req, res) => {
    console.log(req.body)
    res.send(`Here is the returned data: ${req.body.data[2]} `)
})

app.get("/", (req, res) => {
    res.send("Hello!")
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})