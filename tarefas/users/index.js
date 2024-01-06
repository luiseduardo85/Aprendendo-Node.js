const express = require('express');
const router = express.Router()

const path = require('path');

const basePath = path.join(__dirname, '../views')

router.get("/sum", (req,res) =>{
    res.sendFile(`${basePath}/activate.html`);
});

router.post("/save", (req, res) =>{
    
    res.sendFile(`${basePath}/activate.html`);
});

module.exports = router