const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
require('./connection')
const UserModel = require('./userModel')

app.use(express.json())
app.use(cors())

app.post('/adddata',async(req,res) => {
    const {name,username,email,address,phone} = req.body
    console.log("data ==>",name,username,email,address,phone)
    const data = new UserModel({
        name : name,
        username : username,
        email : email,
        address : address,
        phone : phone
    })
    const data1 = await data.save()
    if(data1){
        res.status(200).json({message : 'Data added successfully!!!'})
    }
    else{
        res.status(400).json({message : 'Something went wrong!!!'})
    }
})

app.get('/getdata',async(req,res)=>{
    const data = await UserModel.find({}).select('-_id -__v')
    if(data){
        res.status(200).json({data : data})
    }
    else{
        res.status(400).json({message : 'Something went wrong!!!'})
    }
})

app.listen(process.env.PORT,()=>{console.log(`Server running on port ${process.env.PORT}`)})
