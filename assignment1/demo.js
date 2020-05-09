var fs = require('fs');
var argv = require('yargs').argv;

var a = argv.name;
fs.exists(a+'.txt', (exits)=>{
    if (exits) {
        console.log('already exist');
        process.exit();
    } else {
        fs.writeFile(a+'.txt', 'you are awesome', (err)=>{
            if (err) {
                console.log("file creation unsuccessful");
            } else {
                console.log(a+'.txt file creation successful');
            }
        });
    }
});