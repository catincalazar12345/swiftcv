const express = require('express');
const router = express.Router();
const {PdfController} = require('../Controllers/index');

router.post('/send', PdfController.processInformation);