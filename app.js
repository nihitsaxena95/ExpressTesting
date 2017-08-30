let express = require('express');
let body = require('body-parser');
let index = require('./router/index');
let update = require('./router/update');
let insert = require('./router/insert');
let delete1 = require('./router/delete');


let mongoose = require('mongoose');
let config = require('./config/config');

let app = express();

app.use(body.json());
app.use(body.urlencoded({ extended: false }));

app.use('/',index);
app.use('/update',update);
app.use('/insert',insert);
app.use('/delete',delete1);

// mongoose.connect(config.url);
// mongoose.connection.on("connected", () => {
// 	console.log("Success");
// })
// mongoose.connection.on("Error", () => {
// 	console.log("Error");
// })
app.listen(8081, () => {
console.log("port 8081 is working");
});
