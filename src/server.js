/**
 * Created by qiyanzi on 16-8-4.
 */
const express = require('express');
let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

app.get('/query', (req, res)=> {
    res.send(req.query.name);
});

app.get('/params/:name', (req, res)=> {
    res.send(req.params);
});

app.post('/header', (req, res)=> {
    res.send(req.get('name'));
});

app.post('/user', (req, res)=> {
    res.send(req.body.name);
});

app.post('/json', (req, res)=> {
    res.send(req.body);
});

app.listen(3000, ()=> {
    console.log('Example app listening on port 3000!');
});

module.exports = app;