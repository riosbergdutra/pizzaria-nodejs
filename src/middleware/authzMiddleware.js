const jwt = require('jsonwebtoken');
const segredo = 'seu_segredo_secreto';

function gerarToken(pedido) {
  const payload = {
    pedidoId: pedido._id,
    numeroPedido: pedido.numeroPedido,
  };

  const token = jwt.sign(payload, segredo, { expiresIn: '1h' });

  return token;
}

module.exports = gerarToken;