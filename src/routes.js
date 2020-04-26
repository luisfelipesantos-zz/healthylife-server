const { Router } = require('express');

const CaixaController = require('./app/controllers/CaixaController');
const CategoriaController = require('./app/controllers/CategoriaController');
const CompraController = require('./app/controllers/CompraController');
const ContraIndicacaoController = require('./app/controllers/ContraIndicacaoController');
const IndicacaoController = require('./app/controllers/IndicacaoController');
const ItemController = require('./app/controllers/ItemController');
const MovimentoCaixaController = require('./app/controllers/MovimentoCaixaController');
const OperadorController = require('./app/controllers/OperadorController');
const PagamentoController = require('./app/controllers/PagamentoController');
const ProdutoController = require('./app/controllers/ProdutoController');
const ProdutoHasContraIndicacaoController = require('./app/controllers/ProdutoHasContraIndicacaoController');
const ProdutoHasIndicacaoController = require('./app/controllers/ProdutoHasIndicacaoController');
const TipoPagamentoController = require('./app/controllers/TipoPagamentoController');

const routes = Router();

//Rotas Caixa
routes.get('/caixas', CaixaController.index);
routes.get('/caixas/:id', CaixaController.show);
routes.post('/caixas', CaixaController.store);
routes.put('/caixas/:id', CaixaController.update);
routes.delete('/caixas/:id', CaixaController.destroy);

//Rotas Categoria
routes.get('/categorias', CategoriaController.index);
routes.get('/categorias/:id', CategoriaController.show);
routes.post('/categorias', CategoriaController.store);
routes.put('/categorias/:id', CategoriaController.update);
routes.delete('/categorias/:id', CategoriaController.destroy);

//Rotas Compra
routes.get('/compras', CompraController.index);
routes.get('/compras/:id', CompraController.show);
routes.post('/compras', CompraController.store);
routes.put('/compras/:id', CompraController.update);
routes.delete('/compras/:id', CompraController.destroy);

//Rotas ContraIndicacao
routes.get('/contraindicacoes', ContraIndicacaoController.index);
routes.get('/contraindicacoes/:id', ContraIndicacaoController.show);
routes.post('/contraindicacoes', ContraIndicacaoController.store);
routes.put('/contraindicacoes/:id', ContraIndicacaoController.update);
routes.delete('/contraindicacoes/:id', ContraIndicacaoController.destroy);

//Rotas Indicacao
routes.get('/indicacoes', IndicacaoController.index);
routes.get('/indicacoes/:id', IndicacaoController.show);
routes.post('/indicacoes', IndicacaoController.store);
routes.put('/indicacoes/:id', IndicacaoController.update);
routes.delete('/indicacoes/:id', IndicacaoController.destroy);

//Rotas Item
routes.get('/itens', ItemController.index);
routes.get('/itens/:id', ItemController.show);
routes.post('/itens', ItemController.store);
routes.put('/itens/:id', ItemController.update);
routes.delete('/itens/:id', ItemController.destroy);

//Rotas MovimentoCaixa
routes.get('/movimentoscaixa', MovimentoCaixaController.index);
routes.get('/movimentoscaixa/:id', MovimentoCaixaController.show);
routes.post('/movimentoscaixa', MovimentoCaixaController.store);
routes.put('/movimentoscaixa/:id', MovimentoCaixaController.update);
routes.delete('/movimentoscaixa/:id', MovimentoCaixaController.destroy);

//Rotas Operador
routes.get('/operadores', OperadorController.index);
routes.get('/operadores/:id', OperadorController.show);
routes.post('/operadores', OperadorController.store);
routes.put('/operadores/:id', OperadorController.update);
routes.delete('/operadores/:id', OperadorController.destroy);

//Rotas Pagamento
routes.get('/pagamentos', PagamentoController.index);
routes.get('/pagamentos/:id', PagamentoController.show);
routes.post('/pagamentos', PagamentoController.store);
routes.put('/pagamentos/:id', PagamentoController.update);
routes.delete('/pagamentos/:id', PagamentoController.destroy);

//Rotas Produto
routes.get('/produtos', ProdutoController.index);
routes.get('/produtos/:id', ProdutoController.show);
routes.post('/produtos', ProdutoController.store);
routes.put('/produtos/:id', ProdutoController.update);
routes.delete('/produtos/:id', ProdutoController.destroy);

//Rotas ProdutoHasContraIndicacao
routes.get('/produtoscontraind', ProdutoHasContraIndicacaoController.index);
routes.get('/produtoscontraind/:id', ProdutoHasContraIndicacaoController.show);
routes.post('/produtoscontraind', ProdutoHasContraIndicacaoController.store);
routes.put('/produtoscontraind/:id', ProdutoHasContraIndicacaoController.update);
routes.delete('/produtoscontraind/:id', ProdutoHasContraIndicacaoController.destroy);

//Rotas ProdutoHasIndicacao
routes.get('/produtosind', ProdutoHasIndicacaoController.index);
routes.get('/produtosind/:id', ProdutoHasIndicacaoController.show);
routes.post('/produtosind', ProdutoHasIndicacaoController.store);
routes.put('/produtosind/:id', ProdutoHasIndicacaoController.update);
routes.delete('/produtosind/:id', ProdutoHasIndicacaoController.destroy);

//Rotas TipoPagamento
routes.get('/tipospagamento', TipoPagamentoController.index);
routes.get('/tipospagamento/:id', TipoPagamentoController.show);
routes.post('/tipospagamento', TipoPagamentoController.store);
routes.put('/tipospagamento/:id', TipoPagamentoController.update);
routes.delete('/tipospagamento/:id', TipoPagamentoController.destroy);

module.exports = routes;

