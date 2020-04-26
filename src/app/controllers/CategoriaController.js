const { Categoria } = require('../models');

class CategoriaController {
   async index(req, res) {
        try {
            const categorias = await Categoria.findAll();

            return res.json(categorias);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async show(req, res) {
        try {
            const categoria = await Categoria.findByPk(req.params.id);

            return res.json(categoria);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async store(req, res) {
        try {
            const categoria = await Categoria.create(req.body);

            return res.json(categoria);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const categoria = await Categoria.findByPk(req.params.id);

            categoria.update(req.body);

            return res.json({ categoria });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }

    async destroy(req, res) {
        try {
            const categoria = await Categoria.findByPk(req.params.id);

            categoria.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }
}

module.exports = new CategoriaController();