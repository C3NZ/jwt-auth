const express = require('express')
const router = express.Router();

router.get('/sign-up', (req, res) => {
    res.render('sign-up')
});

router.post('/sign-up', (req, res) => {
    console.log(req.body);
    res.send(req.body)
});


module.exports = router;
