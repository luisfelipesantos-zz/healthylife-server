const { Compra } = require('../models');

class CompraController {
   async index(req, res) {
        try {
            const compras = await Compra.findAll();

            return res.json(compras);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async show(req, res) {
        try {
            const compra = await Compra.findByPk(req.params.id);

            return res.json(compra);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async store(req, res) {
        try {
            const compra = await Compra.create(req.body);

            return res.json(compra);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const compra = await Compra.findByPk(req.params.id);

            compra.update(req.body);

            return res.json({ compra });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }

    async destroy(req, res) {
        try {
            const compra = await Compra.findByPk(req.params.id);

            compra.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }
}

module.exports = new CompraController();