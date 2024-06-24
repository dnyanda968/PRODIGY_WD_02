const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

let lapTimes = [];

app.get('/api/laps', (req, res) => {
    res.json(lapTimes);
});

app.post('/api/laps', (req, res) => {
    const { lap } = req.body;
    lapTimes.push(lap);
    res.status(201).send();
});

app.delete('/api/laps', (req, res) => {
    lapTimes = [];
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
