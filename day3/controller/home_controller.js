const dbModel=require("../model/dbschema")
exports.welcome=(req,res)=>{
console.log("home controller");
res.send("home controoller")
}
exports.welcome2=(req,res)=>{
    console.log("welcome 2")
    res.send("home controller 2")
}
exports.addEmployee=async(req,res,next)=>{
    console.log("inside add employee")
    try{
        console.log(req.body)
        const result=await dbModel.create(req.body);
        res.send("hello")
    }
    catch(err){console.log(err)}
}