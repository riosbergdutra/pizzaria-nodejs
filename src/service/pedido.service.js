const Pedido = require('../model/pedidos');

const listAllPedidos = async () => {
  try {
    return await Pedido.find();
  } catch (err) {
    throw err;
  }
}

const createPedido = async (pedidoData) => {
  try {
    const pedido = new Pedido(pedidoData);
    return await pedido.save();
  } catch (err) {
    throw err;
  }
}

const getPedidoById = async (id) => {
  try {
    return await Pedido.findById(id);
  } catch (err) {
    throw err;
  }
}

const updatePedido = async (id, pedidoData) => {
  try {
    return await Pedido.findByIdAndUpdate(id, pedidoData, { new: true });
  } catch (err) {
    throw err;
  }
}

const deletePedido = async (id) => {
  try {
    await Pedido.findByIdAndRemove(id);
  } catch (err) {
    throw err;
  }
}

module.exports = {
  listAllPedidos,
  createPedido,
  getPedidoById,
  updatePedido,
  deletePedido,
};