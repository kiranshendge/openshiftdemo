const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send({Name: req.query.name});
})

let server = app.listen(8900, function() {
    console.log('Server is listening on port 8900')
});