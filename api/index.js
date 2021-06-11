const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const colors = require('./routes/colors');

app.use(cors());

app.use('/colors', colors);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
