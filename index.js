const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('HELLO WORLD'));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`server listening on the port ${PORT}!!!`));
