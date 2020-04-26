const { Item } = require('../models');

class ItemController {
   async index(req, res) {
        try {
            const itens = await Item.findAll();

            return res.json(itens);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async show(req, res) {
        try {
            const item = await Item.findByPk(req.params.id);

            return res.json(item);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async store(req, res) {
        try {
            const item = await Item.create(req.body);

            return res.json(item);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const item = await Item.findByPk(req.params.id);

            item.update(req.body);

            return res.json({ item });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }

    async destroy(req, res) {
        try {
            const item = await Item.findByPk(req.params.id);

            item.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
     }
}

module.exports = new ItemController();