let express=require('express');
let bodyParser=require('body-parser');
let app=express();

let path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/register',(req,res)=>{
    res.render('index');
});

app.post('/register',(req,res)=>{
    console.log(req.body);
    res.send('Registration successful');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});