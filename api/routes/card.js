const router = require('express').Router();
const cardController = require('../controllers/cardController');

//Add Card
router.post('/add', async (req, res) => {
    cardController.addCard(req, res);
});

//Get Card
router.get('/all', async (req, res) => {
    cardController.getCards(req, res);
});

router.get('/get', async (req, res) => {
    cardController.getCard(req, res);
});

//Update Card
router.put('/update', async (req, res) => {
    cardController.updateCard(req, res);
});

//Delete Card
router.delete('/delete', async (req, res) => {
    cardController.deleteCard(req, res);
});

module.exports = router;
