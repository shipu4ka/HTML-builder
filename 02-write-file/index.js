const path = require('path');
let fs = require('fs');
const {stdin, stdout} = process;
let output = fs.createWriteStream(path.resolve('02-write-file', "text.txt"), {encoding: 'utf-8'});

stdout.write('Hello! Write what you want and you will be heard.\n');
stdin.on('data', (data) => {
    if(data.toString().trim() === 'exit') {
        process.exit();
    };
    output.write(data);
});

process.on('exit', () => stdout.write('Bye! Come back when you want to talk.'));
process.on('SIGINT', () => process.exit());