const { MovimentoCaixa } = require('../models');

class MovimentoCaixaController {
   async index(req, res) {
        try {
            const movimentosCaixa = await MovimentoCaixa.findAll();

            return res.json(movimentosCaixa);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async show(req, res) {
        try {
            const movimentoCaixa = await MovimentoCaixa.findByPk(req.params.id);

            return res.json(movimentoCaixa);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async store(req, res) {
        try {
            const movimentoCaixa = await MovimentoCaixa.create(req.body);

            return res.json(movimentoCaixa);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const movimentoCaixa = await MovimentoCaixa.findByPk(req.params.id);

            movimentoCaixa.update(req.body);

            return res.json({ movimentoCaixa });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }

    async destroy(req, res) {
        try {
            const movimentoCaixa = await MovimentoCaixa.findByPk(req.params.id);

            movimentoCaixa.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }
}

module.exports = new MovimentoCaixaController();