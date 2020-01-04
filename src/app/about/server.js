//install express server
const express = require('express');
const path = require('path');
const app = express();


// serve only static file from the dist directory
//replace the 'dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/myresume'));

app.get('*',function(req,res){
//replace the 'dist/<to_your_project_name>/index.html' 
res.sendFile(path.join(__dirname + '/dist/myresume/index.html'));
});
// start the app by listening on the default heroku port
app.listen(process.env.port)
