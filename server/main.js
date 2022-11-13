const express = require('express');
const cors = require('cors');

const router = require('./ROUTER/router');

const app = express();
const port = 7000;

app.use(cors());
app.use(express.json());

app.use('/', router);

app.get("/",(req,res)=>{
    res.send("APP IS RUNNING")
})

app.listen(port, () => console.log("app listen"));