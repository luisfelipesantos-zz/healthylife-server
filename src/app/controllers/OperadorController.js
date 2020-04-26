const { Operador } = require('../models');

class OperadorController {
   async index(req, res) {
        try {
            const operadores = await Operador.findAll();

            return res.json(operadores);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async show(req, res) {
        try {
            const operador = await Operador.findByPk(req.params.id);

            return res.json(operador);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async store(req, res) {
        try {
            const operador = await Operador.create(req.body);

            return res.json(operador);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const operador = await Operador.findByPk(req.params.id);

            operador.update(req.body);

            return res.json({ operador });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }

    async destroy(req, res) {
        try {
            const operador = await Operador.findByPk(req.params.id);

            operador.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }
}

module.exports = new OperadorController();