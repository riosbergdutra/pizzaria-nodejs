const express = require('express');
const router = express.Router();
const pedidoscontroller = require('../controller/pedidos.controller'); 

// Rota para listar todos os pedidos
router.get('/findAll', pedidoscontroller.listAllPedidosController);

// Rota para obter um pedido por ID
router.get('/findById/:id', pedidoscontroller.getPedidoByIdController);

// Rota para criar um novo pedido
router.post('/create', pedidoscontroller.createPedidoController);

// Rota para atualizar um pedido por ID
router.put('/update/:id', pedidoscontroller.updatePedidoController);

// Rota para excluir um pedido por ID
router.delete('/remove/:id', pedidoscontroller.deletePedidoController);

module.exports = router;