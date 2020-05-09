const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	return res.send('Hello World!'); 
});

app.use(routes);

console.log('listening on port 8000...');
app.listen(8000);
