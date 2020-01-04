//install express server
const express = require('express');
const app = express();


// serve only static file from the dist directory
//replace the 'dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist'));
// start the app by listening on the default heroku port
app.listen(process.env.port || 8080)
