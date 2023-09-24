const express = require('express');
const router = express.Router();
const pedidoService = require('../service/pedido.service'); // Importe o serviço de pedidos

router.get('/', async (req, res) => {
  try {
    const pedidos = await pedidoService.listAllPedidos();
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const pedido = await pedidoService.getPedidoById(req.params.id);
    res.json(pedido);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  try {
    const novoPedido = await pedidoService.createPedido(req.body);
    res.status(201).json(novoPedido);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



router.put('/:id', async (req, res) => {
  try {
    const updatedPedido = await pedidoService.updatePedido(req.params.id, req.body);
    res.json(updatedPedido);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    await pedidoService.deletePedido(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;