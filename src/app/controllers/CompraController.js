const { Compra } = require('../models');
const Sequelize = require('sequelize');
const config = require('../../config/database.js');

const sequelize = new Sequelize(config);

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

    async getAllComprasFromCaixa(req, res) {
        try {
            const allCompras = await sequelize.query('select prod.id, prod.nome as \'prodnome\', it.quantidade, it.valor, mov.horaInicio, op.nome as \'opnome\', caix.data, caix.id as \'caixaid\', mov.id as \'movid\' FROM Produto as prod INNER JOIN Item as it on it.ProdutoId = prod.id INNER JOIN Compra as comp on it.CompraId = comp.id INNER JOIN MovimentoCaixa as mov on comp.MovimentoCaixaId = mov.id INNER JOIN Caixa as caix on mov.CaixaId = caix.id INNER JOIN Operador as op on mov.OperadorId = op.id where caix.id = ?;', {
                replacements: [req.params.idCaixa],
                type: sequelize.QueryTypes.SELECT
            });
            return res.json(allCompras);
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