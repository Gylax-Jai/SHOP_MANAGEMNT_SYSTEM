const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// ✅ Serve static files from /employee (for HTML and CSS)
app.use(express.static(path.join(__dirname, '../employee')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../employee/employeeweb.html'));
});

app.get('/chat', (req, res) => {
    res.render('chat', { username: "jai" });
});

app.get('/dataentry', (req, res) => {
    res.render("dataentry");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
