const { Caixa } = require('../models');

class CaixaController {
   async index(req, res) {
        try {
            const caixas = await Caixa.findAll();

            return res.json(caixas);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async show(req, res) {
        try {
            const caixa = await Caixa.findByPk(req.params.id);

            return res.json(caixa);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async store(req, res) {
        try {
            const caixa = await Caixa.create(req.body);

            return res.json(caixa);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const caixa = await Caixa.findByPk(req.params.id);

            caixa.update(req.body);

            return res.json({ caixa });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }

    async destroy(req, res) {
        try {
            const caixa = await Caixa.findByPk(req.params.id);

            caixa.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }
}

module.exports = new CaixaController();