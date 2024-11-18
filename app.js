const express = require('express');
const app = express();
const PORT = 3000;

//in the brouser http:localhost:3000/user/23

app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User id is ${userId}`);
});

app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`The search term is ${query}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
