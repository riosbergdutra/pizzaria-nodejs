const express = require("express");
const ConnectToDatabase = require("./src/database/database");
const pedido = require("./src/router/router.pedidos");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')

const app = express();

ConnectToDatabase();
const port = 5000;

app.use(express.json());

// Rota para a documentação Swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/pedido", pedido);

app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo a nossa pizzaria"
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});