const { TipoPagamento } = require('../models');

class TipoPagamentoController {
   async index(req, res) {
        try {
            const tiposPagamento = await TipoPagamento.findAll();

            return res.json(tiposPagamento);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async show(req, res) {
        try {
            const tipoPagamento = await TipoPagamento.findByPk(req.params.id);

            return res.json(tipoPagamento);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async store(req, res) {
        try {
            const tipoPagamento = await TipoPagamento.create(req.body);

            return res.json(tipoPagamento);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const tipoPagamento = await TipoPagamento.findByPk(req.params.id);

            tipoPagamento.update(req.body);

            return res.json({ tipoPagamento });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }

    async destroy(req, res) {
        try {
            const tipoPagamento = await TipoPagamento.findByPk(req.params.id);

            tipoPagamento.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }
}

module.exports = new TipoPagamentoController();