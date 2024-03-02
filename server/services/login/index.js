const express = require('express');

const app = express();

app.use(express.json());

app.use('/',(req, res) => {
    return res.status(200).json({ message: 'Hello from login service' })
});

app.listen(8002, () => {
    console.log('Jobs service is running on port 8001');
});
