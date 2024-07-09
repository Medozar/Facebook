// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

let inputsData = []; // This array will store the inputs; use a database in a real application

app.post('/store', (req, res) => {
    const { input1, input2 } = req.body;
    inputsData.push({ input1, input2 });
    res.status(200).send({ message: 'Data stored successfully' });
});

app.get('/retrieve', (req, res) => {
    res.status(200).json(inputsData);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
