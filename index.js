const express = require("express")
const ConnectToDatabase = require("./src/database/database")
const rota = require("./src/router/router.pedidos")

const app = express()

ConnectToDatabase()
const port = 5000

app.use(express.json())

app.use("/rota", rota) 

app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo ao nosso marketplace"
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})