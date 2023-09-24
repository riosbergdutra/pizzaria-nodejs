const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

// Rota para a documentação Swagger
router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));