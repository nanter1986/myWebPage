var express=require('express');
var app=express();
//app.set('view engine','ejs');
app.use('/css',express.static('css'));
app.use('/css',express.static('js'));
app.use('/img',express.static('img'));


app.get('/',function(req,res){
  //res.render('profile');
  res.sendFile(__dirname+'/index.html');
})

app.listen(8080,"192.168.1.16");
