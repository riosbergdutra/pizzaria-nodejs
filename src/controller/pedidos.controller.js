const pedidoService = require('../service/pedido.service'); // Importe o serviço de pedidos
const  gerarToken  = require('../middleware/authzMiddleware');

// Controlador para listar todos os pedidos
const listAllPedidosController = async (req, res) => {
  try {
    const pedidos = await pedidoService.listAllPedidos();
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controlador para obter um pedido por ID
const getPedidoByIdController = async (req, res) => {
  try {
    const pedido = await pedidoService.getPedidoById(req.params.id);
    if (!pedido) {
      return res.status(404).json({ message: 'Pedido não encontrado.' });
    }
    res.json(pedido);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controlador para criar um novo pedido
const createPedidoController = async (req, res) => {
  try {
    const body = req.body;
    const pedidocriado = await pedidoService.createPedido(body);

    const token = gerarToken(pedidocriado);

    return res.status(201).send({ pedido: pedidocriado, token });
  } catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: `Erro inesperado, tente novamente!` });
  }
};

// Controlador para atualizar um pedido por ID
const updatePedidoController = async (req, res) => {
  try {
    const updatedPedido = await pedidoService.updatePedido(req.params.id, req.body);
    res.json(updatedPedido);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controlador para excluir um pedido por ID
const deletePedidoController = async (req, res) => {
  try {
    await pedidoService.deletePedido(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  listAllPedidosController,
  getPedidoByIdController,
  createPedidoController,
  updatePedidoController,
  deletePedidoController,
};