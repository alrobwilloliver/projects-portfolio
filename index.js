const path = require("path");
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/public/views')
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.sendFile("index.html", { root: __dirname + '/public/views' })
})

app.get('/projects', (req, res) => {
    res.sendFile("projects.html", { root: __dirname + '/public/views' })
})

app.listen(process.env.PORT || 8000, () => {
    console.log("Connected");
})