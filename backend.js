const express = require('express')
const app = express()
const port = 80;

app.get('/', (req, res) => res.send('Backend Running'))

app.listen(port, () => console.log(`Backend Started (Port: ${port})`));