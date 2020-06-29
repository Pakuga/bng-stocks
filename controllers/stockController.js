const Stock = require('./../models/stock');

exports.create = async (req, res) => {
    try {
        if (req.body) {
            let data = await Stock.create(req.body);
            res.status(201).send({code: "0", msg: "success", data});
        }
    } catch (error) {
        res.status(400).send({code: "-1", msg: "error", data: {error: error}});
    }
};

exports.getAll = async (req, res) => {
    try {
        let data = await Stock.getAll();
        res.status(200).send({code: "0", msg: "success", data: data});
    } catch (error) {
        res.status(400).send({code: "-1", msg: "error", data: {error: error}});
    }
};
