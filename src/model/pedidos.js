const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  numeroPedido: {
    type: Number,
    required: true
  },
  cliente: {
    type: String,
    required: true
  },
  enderecoEntrega: {
    type: String,
    required: true
  },
  pizzas: [{
    nome: String,
    tamanho: String,
    quantidade: Number
  }],
  dataPedido: {
    type: Date,
    default: Date.now
  }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;