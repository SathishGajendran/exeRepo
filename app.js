/**
 * Created by EMD021 on 5/18/15.
 */


var http=require('http');
var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');

var app=express();

//app.set('views',path.join(__dirname,'views'));
//app.set('view engine','jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/home',function(req,res){
    res.end('Hello World');
});
var port=process.env.PORT||9999;
http.createServer(app).listen(port,'127.0.0.1',function(){
    console.log('Server is running at 127.0.0.1:9999');
});