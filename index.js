const express = require('express');
const app = express();
const port = 3000;

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

app.listen(port, () => {
	console.log(`Sharing with Benifits app started on http://localhost:${port}`);
});
