const mongoose = require('mongoose')

mongoose
.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(()=>{console.log('Connected to Mongodb!!')})
.catch(()=>{console.log('Somthing went wrong with connection!!')})
