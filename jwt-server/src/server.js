const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express();

const SECRET_KEY = "thiskeyneedtobeveryverylongkey";
app.use(cors());
app.use(bodyParser.json())

users = [
    { id: 1, username: 'shantanu', password: 'welcome1' },
    { id: 2, username: 'admin', password: 'admin123' }
]

app.post('/login', (req, resp) => {
    console.log("login started");
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return resp.status(401).json({ message: 'Invalid Credentials' })
    }
    const token = jwt.sign({ id: user.id, name: user.username }, SECRET_KEY, { expiresIn: '10h' })
    return resp.json({ token });
}

);

app.get('/hello', (req, resp) => {
    resp.json({ message: "hello" });
})



const verifyToken = (req, resp, next) => {
    const authData = req.headers['authorization'];
    if (!authData) {
        return resp.status(401).json({ message: "unauthorized" });
    }
    const token = authData.split(' ')[1];
    if (!token) {
        return resp.status(401).json({ message: "no token in request" });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return resp.status(401).json({ message: "invalid token in request" });
        }
        req.user = decoded;
        next();
    })
}
app.get("/protected", verifyToken, (req, resp) => {

    return resp.json({ message: req.user.name + " accessed protected resource" });
})

app.listen(PORT, () => { console.log("Server started at Post " + PORT) })