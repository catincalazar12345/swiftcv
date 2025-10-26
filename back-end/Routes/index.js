const express = require('express');
const router = express.Router();
const PdfRouter = require('./PdfRouter');

router.use("/pdf", PdfRouter);

module.exports =  router;