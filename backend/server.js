const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
    res.send("Connected!");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
