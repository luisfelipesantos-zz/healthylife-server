const { Indicacao } = require('../models');

class IndicacaoController {
   async index(req, res) {
        try {
            const indicacoes = await Indicacao.findAll();

            return res.json(indicacoes);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async show(req, res) {
        try {
            const indicacao = await Indicacao.findByPk(req.params.id);

            return res.json(indicacao);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async store(req, res) {
        try {
            const indicacao = await Indicacao.create(req.body);

            return res.json(indicacao);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const indicacao = await Indicacao.findByPk(req.params.id);

            indicacao.update(req.body);

            return res.json({ indicacao });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }

    async destroy(req, res) {
        try {
            const indicacao = await Indicacao.findByPk(req.params.id);

            indicacao.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }
}

module.exports = new IndicacaoController();