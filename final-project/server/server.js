const express = require("express")

const { data, catData } = require("./data")

const app = express()

app.use(express.json())

app.use(express.static("../client"))

app.get("/data", (req, res) => {
    res.json(data)
})

// app.get("/cat", (req, res) => {
//     res.json(catData)
// })

app.listen(3333, () => {
    console.log("Listening on port 3333")
})
