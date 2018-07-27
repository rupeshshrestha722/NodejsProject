var express = require('express');


var router = express.Router();
var controller = require('./CustomerController');

router.get("/",(req,res)=>{
    // res.send("<h1>Customer Index</h1>");
    controller.index(req,res);
});

router.get("/create",(req,res)=>{
// res.send("<h1>Create Customer</h1>")
controller.create(req,res);
});

router.get("/edit/:id",(req,res)=>{
    // res.send("<h1>Edit Customer</h1>");
    controller.edit(req,res);
})

router.get("/delete/:id",(req,res)=>{
    // res.send("<h1>Delete Customer</h1>");
    controller.delete(req,res);
})

module.exports=router;