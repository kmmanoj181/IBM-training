const http=require('http');
const server=http.createServer((req,res)=>{
    res.write('itworks');
    res.end();
});
server.listen(4000);

console.log(http);