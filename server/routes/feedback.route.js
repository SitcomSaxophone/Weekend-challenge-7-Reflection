const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "feedback";`)
    .then(results => {
        res.send(results.rows);
    })
    .catch(error => {
        console.log('Error making GET to database: ', error);
    })
})

module.exports = router;