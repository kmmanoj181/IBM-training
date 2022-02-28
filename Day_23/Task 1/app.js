const os=require('os');
const ver=os.version();
console.log(os.totalmem()+os.freemem()+os.platform()+os.version());

const path=require('path');
console.log(path.sep + path.delimiter+path.basename('/public_htmkl/home/index.h')+path.isAbsolute('/node/js/'));


var fs = require('fs');

var data = fs.readFileSync('./demo.txt', 'utf8');
console.log(data);