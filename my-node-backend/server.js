const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Node.js!' });
});


//port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
