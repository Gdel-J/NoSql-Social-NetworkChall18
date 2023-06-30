const express = require('express');
const apiRoutes = require('./api');

const router = express.Router();

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.sendStatus(404);
});

module.exports = router;
