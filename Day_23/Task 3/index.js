var fs = require('fs');

fs.readFile('demo.txt','utf-8', function (err, data) {
    if (err) throw err;

console.log(data);
});

fs.writeFile('demo.txt', 'Hello World!-->>>', function (err) { 
                        if (err)
        console.log(err);
                        else
        console.log('Write operation complete.');
});



fs.readFile('demo.txt','utf-8', function (err, data) {
                    if (err) throw err;

    console.log(data);
});