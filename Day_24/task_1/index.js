// without Express
// const http=require('http');
// const url= require('url');
// const fs=require("fs");

// const server=http.createServer((req,res)=>{
//     const path=req.url;
//     if(path=='/'){
//         res.writeHead(200,{
//             'content-type':'text/html'
//         })
//         const filedata=fs.readFileSync("./index.html");
//         res.write(filedata);
//         res.end();
//     }
//     else if(path=='/about'){
//         res.writeHead(200,{
//             'content-type':'text/html'
//         })
//         const aboutdata=fs.readFileSync("./about.html");
//         res.write(aboutdata);
//         res.end();

//     }
//     // res.write('itworks');
//     // res.end();
// });
// server.listen(4000);

// console.log(http);

// With Express
const express= require('express');
const app=express();
console.log(express);
app.get('/',(req,res)=>{
    res.send("hello World")
});
app.listen(process.env.PORT|| 4000);

// process.env.PORT-> helps us to got any other port if 400 or
// desired port is in use