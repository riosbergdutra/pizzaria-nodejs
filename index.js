const express = require("express")
const ConnectToDatabase = require("./src/database/database") //arquivo de conexao com o banco

const app = express()
ConnectToDatabase()
const port = 5000

app.use(express.json())

app.get("/", (req,res) => {
    res.send({
        message:"Bem vindo ao nosso marketplace"
    })
})

app.listen(port,() => {
    console.log(`http://localhost:${port}`)
})