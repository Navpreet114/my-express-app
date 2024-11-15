const express = require('express');
const router = require("./routes/pages");

const app = express();
const PORT = 3000;

//implementing routes
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
