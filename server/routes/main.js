const express = require('express');
const router = express.Router();

//routes

router.get('', (req, res) => {
    const locals ={
        title: 'Node j8s blog',
        description: 'Node js blog,mongodb etc'
    }


    res.render('index',{ locals }) 
});
router.get('/about', (req, res) => {
    res.render('about') 
});

router.get('/contact', (req, res) => {
    res.render('contact') 
});

module.exports = router;