const home=require('../day2/controller/home_controller')
const express = require('express');
const router = require('./routing/route');
const app= express();
debugger;
app.use(express.json())

// app.get('/',router)

app.use(router)
debugger;
app.listen(4001)

console.log('server started at port 4001')