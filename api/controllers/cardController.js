const Card = require('../models/Card');

exports.addCard = async (req, res) => {
    let { cardNumber, name, cvv, expDate } = req.body;

    const newCard = new Card({
        number: cardNumber,
        expDate: expDate,
        cardHolder: name,
        cvv: cvv,
    });

    try {
        const savedCard = await newCard.save();
        res.status(201).json(savedCard);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getCards = async (req, res) => {
    try {
        const cards = await Card.find({}).select(['-__v', '-createdAt', '-updatedAt']);
        res.status(200).json(cards);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getCard = async (req, res) => {
    let { _id } = req.body;

    try {
        const card = await Card.findById({ _id }).select(['-__v', '-createdAt', '-updatedAt']);
        res.status(200).json(card);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.deleteCard = async (req, res) => {
    let { _id } = req.body;

    try {
        const deletedCard = await Card.deleteOne({ _id: _id });
        res.status(200).json(deletedCard);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

exports.updateCard = async (req, res) => {
    let { _id, cardNumber, name, cvv, expDate } = req.body;

    try {
        const updatedCard = await Card.findByIdAndUpdate({ _id }, { number: cardNumber, expDate: expDate, cardHolder: name, cvv: cvv }, { runValidators: true });
        res.status(200).json(updatedCard);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
