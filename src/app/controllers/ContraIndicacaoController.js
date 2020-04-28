const { Contraindicacao } = require('../models');

class ContraIndicacaoController {
   async index(req, res) {
        try {
            const contraindicacoes = await Contraindicacao.findAll();

            return res.json(contraindicacoes);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async show(req, res) {
        try {
            const contraindicacao = await Contraindicacao.findByPk(req.params.id);

            return res.json(contraindicacao);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async store(req, res) {
        try {
            const contraindicacao = await Contraindicacao.create(req.body);

            return res.json(contraindicacao);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const contraindicacao = await Contraindicacao.findByPk(req.params.id);

            contraindicacao.update(req.body);

            return res.json({ contraindicacao });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }

    async destroy(req, res) {
        try {
            const contraindicacao = await Contraindicacao.findByPk(req.params.id);

            contraindicacao.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }
}

module.exports = new ContraIndicacaoController();