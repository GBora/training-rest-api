const express = require('express');
const cors = require('cors');
const laptopModule = require('./laptops/index');
const pcModule = require('./personal_computers/index');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get('/', async (req, res) => {
    res.send('IT Shop');
})

app.use('/laptops', laptopModule);
app.use('/pc', pcModule);

app.listen(port, () => {
  console.log(`IT Shop listening on port ${port}`);
})