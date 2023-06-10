const express = require('express');
const mongoose = require('mongoose');
const Login = require("../models/login.controller")


const login = express()
login.post("/signup",async(req,res)=>{
    try {
        console.log(req.body)
        let response = new Login(req.body)
        let result = await response.save()
        res.status(200).send({status:200,response:result})

    } catch (error) {
        res.status(400).send({message:"this email is already exist"})
    }
})

module.exports = login