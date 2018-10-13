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
        res.sendStatus(500);
    })
});

router.post(`/`, (req, res) => {
    let feedback = req.body;
    pool.query(`INSERT INTO "feedback"("feeling", "understanding", "support", "comments")
                VALUES($1, $2, $3, $4);`, 
                [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then(() => {   
        res.sendStatus(201);
    })
    .catch(error => {
        console.log('Error making POST to db: ', error);
        res.sendStatus(500);
    });
})

module.exports = router;