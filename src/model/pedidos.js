const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  numeroPedido: {
    type: Number,
    required: true,
    unique: true
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

// Middleware para automatizar a geração do número do pedido
pedidoSchema.pre('save', async function (next) {
  if (!this.numeroPedido) {
    try {
      // Encontre o número do pedido mais alto na coleção e incremente-o
      const pedidoMaisAlto = await this.constructor.findOne({}, { numeroPedido: 1 }).sort('-numeroPedido');
      this.numeroPedido = pedidoMaisAlto ? pedidoMaisAlto.numeroPedido + 1 : 1;
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;