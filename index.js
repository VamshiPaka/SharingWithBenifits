const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./controllers/error');
require('dotenv/config');

const app = express();
const port = 3000;

//DB Connection
mongoose.connect(process.env.DB_Connection, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
	console.log('connected to DB')
);

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('Sharing with benifits');
});

app.post('/user', (req, res) => {
	res.send('This is from POST request');
});

app.put('/user', (req, res) => {
	res.send('This is from PUT request');
});

app.delete('/user', (req, res) => {
	res.send('This is from DELETE request');
});

app.use(function(req, res, next){
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(errorHandler);

app.listen(port, () => {
	console.log(`Sharing with Benifits app started on http://localhost:${port}`);
});
