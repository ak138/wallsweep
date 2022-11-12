const express = require('express')
const app = express()
const port = 3000

const { disconnect } = require('process');
const path = require('path');
const router = express.Router();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

router.get('/', (req, res) =>{
        res.render("WHATEVERYOURPUGISCALLED")
        });
