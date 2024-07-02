const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes=require('./servers/routers/product.routes');
const app = express();
const port = 8000;
require('./servers/config/mongoose.config');

app.use(cors())
app.use(bodyParser.json());
app.use('/api',productRoutes);
app.listen(port,()=>
console.log(`Listening on port:${port}`));