const { Pagamento } = require('../models');

class PagamentoController {
   async index(req, res) {
        try {
            const caixas = await Pagamento.findAll();

            return res.json(caixas);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async show(req, res) {
        try {
            const pagamento = await Pagamento.findByPk(req.params.id);

            return res.json(pagamento);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async store(req, res) {
        try {
            const pagamento = await Pagamento.create(req.body);

            return res.json(pagamento);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const pagamento = await Pagamento.findByPk(req.params.id);

            pagamento.update(req.body);

            return res.json({ pagamento });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }

    async destroy(req, res) {
        try {
            const pagamento = await Pagamento.findByPk(req.params.id);

            pagamento.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }
}

module.exports = new PagamentoController();