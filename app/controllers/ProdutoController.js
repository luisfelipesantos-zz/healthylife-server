const { Produto } = require('../models');

class ProdutoController {
    async index(req, res) {
        try {
            const produtos = await Produto.findAll();

            return res.json(produtos);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async show(req, res) {
        try {
            const produto = await Produto.findByPk(req.params.id);

            return res.json(produto);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async store(req, res) {
        try {
            const produto = await Produto.create(req.body);

            return res.json(produto);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async update(req, res) {
        try {
            const produto = await Produto.findByPk(req.params.id);

            produto.update(req.body);

            return res.json({ produto });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }
    async destroy(req, res) {
        try {
            const produto = await Produto.findByPk(req.params.id);

            produto.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }
}

module.exports = new ProdutoController();