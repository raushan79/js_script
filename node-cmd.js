const cmd=require('node-cmd');
// Module Link : https://www.npmjs.com/package/node-cmd

// cmd.runSync('touch ./example/example.created.file');


// For asynchronous operations
cmd.run(
    `mkdir 'raushan'
cd raushan
touch a b c d e f
ls`,
    function(err, data, stderr){
        console.log('examples dir now contains the example file along with : ',data,err, stderr);
    }
);


// For synchronous operations
let a =cmd.runSync(
    `mkdir 'raushan'
cd raushan
touch a b c d e f
ls`
);

console.log(JSON.stringify(a));