const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    console.log('request recieved')
    console.log(req.url)
    // res.write("Responded")
    if(req.url=='/home'){
        // res.write('home')
        fs.readFile('index.html','utf-8',(err,data)=>{
            res.write(data)
            res.end()
        })
        fs.writeFile('msg.txt','sample data'+new Date(),()=>{
            console.log("data written")
            // res.write('data written')
            // res.end()
        })
        // res.end();
    } 
        
else if(req.url=='/'){

        res.write('default')
        res.end();
    }
    else{

        res.write('404')
        res.end();
    } 
})

server.listen(3000)