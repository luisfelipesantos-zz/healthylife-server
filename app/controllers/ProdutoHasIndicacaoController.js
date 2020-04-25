const { ProdutoHasIndicacao } = require('../models');

class ProdutoHasIndicacaoController {
   async index(req, res) {
        try {
            const produtoHasIndicacoes = await ProdutoHasIndicacao.findAll();

            return res.json(produtoHasIndicacoes);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async show(req, res) {
        try {
            const produtoHasIndicacao = await ProdutoHasIndicacao.findByPk(req.params.id);

            return res.json(produtoHasIndicacao);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async store(req, res) {
        try {
            const produtoHasIndicacao = await ProdutoHasIndicacao.create(req.body);

            return res.json(produtoHasIndicacao);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const produtoHasIndicacao = await ProdutoHasIndicacao.findByPk(req.params.id);

            produtoHasIndicacao.update(req.body);

            return res.json({ produtoHasIndicacao });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }

    async destroy(req, res) {
        try {
            const produtoHasIndicacao = await ProdutoHasIndicacao.findByPk(req.params.id);

            produtoHasIndicacao.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }
}

module.exports = new ProdutoHasIndicacaoController();