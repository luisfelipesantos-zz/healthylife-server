const express = require('express');
const routes = require('./routes');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.get('/', (req, res) => {
	return res.send('Sistema Vida Saudável - Em construção...'); 
});

console.log('listening on port 8000...');
app.listen(8000);
