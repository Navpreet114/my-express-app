const express = require('express');
const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log("This works first");  //middleware for logging, auth, parsing, etc.
    next();
});

app.post('/create', (req, res) => {
    const userData = req.body;
    const JSON = JSON.stringify(userData);
    res.send(`User data recieved: ${Json.stringify(userData)}`);
});

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
