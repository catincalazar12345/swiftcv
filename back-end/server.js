const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Routes/index.js');

const app = express();
app.use(express.json());
// app.use(bodyParser.json());

app.use("/api",router);

app.get('/', (req, res) => {
    res.send("bagamias pulan maivuta ta sclavule");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serverul ruleaza pe http://localhost:${PORT}`);
}).on('error', (err) => {
    console.error('Server error:', err);
});