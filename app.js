let express = require('express');
let index = require('./router/index');
let production = require('./router/product');

let app = express();
app.use('/',index);
app.use('/product',production);
app.listen(8080, () => {
console.log("port 8080 is working");
});
