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
            const allCompras = await sequelize.query('select comp.id as \'compid\', comp.valorTotal, comp.valorDesconto, caix.id as \'caixaid\', mov.id as \'movid\', mov.horaInicio, op.nome, item.quantidade, item.valor, prod.id, prod.nome from Compra comp INNER JOIN MovimentoCaixa mov on comp.MovimentoCaixaId = mov.id INNER JOIN Caixa caix on mov.CaixaId = caix.id INNER JOIN Operador op on mov.OperadorId = op.id INNER JOIN Item item on item.CompraId = comp.id INNER JOIN Produto prod on item.ProdutoId = prod.id where caix.id = ? order by mov.id, comp.id;', {
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