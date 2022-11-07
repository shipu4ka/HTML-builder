const path = require('path');
const fs = require('fs');

fs.readdir(path.join(__dirname, './styles'), (err, files) => {
    if(err) {
        console.log(err);
        return;
    };
    fs.unlink(path.join(__dirname, './project-dist/bundle.css'), () => {});
    files.forEach((item) => {
        if (path.extname(item) === '.css') {
            fs.readFile(path.join(__dirname, './styles', item), (err, data) => {
                fs.appendFile(path.join(__dirname, './project-dist/bundle.css'), data, () => { });
            });
        };
    });
});