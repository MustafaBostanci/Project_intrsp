const morgan=require('morgan');
const express=require('express');
const mongoose=require('mongoose');
const { result } = require('lodash');
const Ders=require('./models/ders');
const dersRoutes=require('./routes/dersRoutes');

const dbURI='mongodb+srv://usr:bos1234@cluster1.mpmxo.mongodb.net/mbDb?retryWrites=true&w=majority';

const app=express();

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=>app.listen(4000))
    .catch((err)=>console.log(err));

    

// app.get('/',(req,res)=>{
//     res.send('<p>merhaba</p>');
// })

app.set('view engine','ejs');
app.set('views','htmls');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use('/dersler',dersRoutes);



app.get('/',(req,res)=>{

   res.redirect('/dersler');
})



app.get('/hakkimda',(req,res)=>{
    res.render('hakkimda',{hakkimda:'Add Students'});
})

app.get('/ders/ekle',(req,res)=>{
    res.render('ekle',{ekle:'Add Classes'});
})

app.get('/courseAdd',(req,res)=>{
    res.render('courseAdd',{courseAdd:'Add Courses'});
})

app.use((req,res)=>{
    res.status(404).render('404');
})

