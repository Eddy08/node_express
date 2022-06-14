const express=require('express')
const home = require('../controller/home_controller')

const router=express.Router()

router.get('/',home.welcome)
router.get('/welcome',home.welcome2)


router.post('/add',home.addEmployee)

module.exports=router;