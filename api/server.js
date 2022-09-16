const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cardRoutes = require('./routes/card');
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('DB connection succesfull!!!');
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/cards', cardRoutes);

app.get('/', cors(), async (req, res) => {
    res.send('this is working');
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
