const { ProdutoHasContraIndicacao } = require('../models');

class ProdutoHasContraIndicacaoController {
   async index(req, res) {
        try {
            const produtoHasContraIndicacoes = await ProdutoHasContraIndicacao.findAll();

            return res.json(produtoHasContraIndicacoes);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async show(req, res) {
        try {
            const produtoHasContraIndicacao = await ProdutoHasContraIndicacao.findByPk(req.params.id);

            return res.json(produtoHasContraIndicacao);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async store(req, res) {
        try {
            const produtoHasContraIndicacao = await ProdutoHasContraIndicacao.create(req.body);

            return res.json(produtoHasContraIndicacao);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const produtoHasContraIndicacao = await ProdutoHasContraIndicacao.findByPk(req.params.id);

            produtoHasContraIndicacao.update(req.body);

            return res.json({ produtoHasContraIndicacao });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }

    async destroy(req, res) {
        try {
            const produtoHasContraIndicacao = await ProdutoHasContraIndicacao.findByPk(req.params.id);

            produtoHasContraIndicacao.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }
}

module.exports = new ProdutoHasContraIndicacaoController();