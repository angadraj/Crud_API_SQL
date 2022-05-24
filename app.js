const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// miniapps
const productRouter = require('./routers/productRouter');

// use routers
app.use('/products', productRouter)

app.listen(PORT, function(req, res) {
    console.log('server running at port ' + PORT);
})
