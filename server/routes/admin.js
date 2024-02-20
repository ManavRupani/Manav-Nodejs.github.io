const express = require('express');
// const { get } = require('mongoose');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const adminLayout = '../views/layouts/admin';

// get
// admin login


router.get('/admin', async (req,res) =>{
    const locals = {
        title : "Admin",
        decription: "Simple Blog created with NodeJs, Express & MongoDB."
    }
    try{
        res.render('admin/index',{locals,layout:adminLayout});

    }catch(error){
        console.log(error);
    }
});






module.exports = router;