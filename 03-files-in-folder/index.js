const path = require('path');
const fs = require('fs');
const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
    if(err) {
        console.log(err);
        return;
    }
    files.forEach((file) => {
        if (file.isFile()) {
            const [name, ext] = file.name.split('.');
            fs.stat(path.join(folderPath, file.name), (err, stats) => {
                console.log(name + ' - ' + ext + ' - ' + stats.size + 'b');
            });
        };
    });
});