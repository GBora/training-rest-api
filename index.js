const express = require('express');
const cors = require('cors');
const laptopModule = require('./laptops/index');
const pcModule = require('./personal_computers/index');
const authModule = require('./auth/index');

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('IT Shop');
})

app.use('/laptops', laptopModule);
app.use('/pc', pcModule);
app.use('/auth', authModule);

app.listen(port, () => {
  console.log(`IT Shop listening on port ${port}`);
})