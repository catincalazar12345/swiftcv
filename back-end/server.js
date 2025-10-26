const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("bagamias pulan maivuta ta sclavule");
});

app.listen(5000, () => {
    console.log("Serverul ruleaza pe http://localhost:5000");
});