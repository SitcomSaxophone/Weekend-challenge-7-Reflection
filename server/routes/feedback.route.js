const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "feedback";`)
    .then(results => {
        res.send(results.rows);
    })
    .catch(error => {
        console.log('Error making GET to db: ', error);
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

router.delete('/:id', (req, res) => {
    pool.query(`DELETE FROM "feedback"
                WHERE "id"=$1;`, [req.params.id])
    .then(() => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.log('Error making DELETE to db: ', error);
    });
})

module.exports = router;