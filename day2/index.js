const home=require('../day2/controller/home_controller')
const express = require('express');
const app= express();



app.get('/',()=>home)

app.listen(4000)
console.log('server started at port 4000')