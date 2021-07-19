const express=require('express');
const Ders=require('../models/ders');
const router=express.Router();
const dersController=require('../controllers/dersController');

router.get('/',dersController.derslerGetir);

router.post('/',dersController.dersEkle);

router.get('/:id',dersController.dersGetir);


router.delete('/:id',dersController.dersSil);

module.exports=router;