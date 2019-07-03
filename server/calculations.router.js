const express = require('express');
const router = express.Router();
const pool = require('./modules/pool');

// GET route to get all the calculations from the database
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM calculations ORDER BY id;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})



// POST route to add a new calculation to the database
router.post('/', (req, res) => {
    const feedback = req.body;
    console.log('what is req.body', feedback);
    const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES 
  ($1, $2, $3, $4)`;
    pool.query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then((result) => {
            console.log(`Added to the database`, feedback);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

// DELETE to remove a calculation
router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    let sqlText = 'DELETE FROM feedback WHERE id=$1;';
    pool.query(sqlText, [reqId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); 
        })
})

module.exports = router;