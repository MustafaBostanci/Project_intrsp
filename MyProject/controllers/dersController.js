const Ders=require('../models/ders');

const derslerGetir=(req,res)=>{

    Ders.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('index',{dersler:result});
    })
    .catch((err)=>console.log(err))
}


const dersEkle=(req,res)=>{
    //console.log(req.body);
    const ders=new Ders(req.body);

    ders.save().then((result)=>{
        res.redirect('/dersler');
    }).catch((err)=>console.log(err))
}


const dersGetir=(req,res)=>{
    const id=req.params.id;

    Ders.findById(id).then((result)=>{
        res.render('detay',{ders:result})
    }).catch((err)=>console.log(err))
}


const dersSil=(req,res)=>{
    const id=req.params.id;
    Ders.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect:'/dersler'});
    }).catch((err)=>console.log(err))
}

module.exports={
    derslerGetir,
    dersEkle,
    dersGetir,
    dersSil
}