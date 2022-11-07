const path = require('path');
const fs = require('fs/promises');

async function copyDir () {
    const copyFolder = await fs.mkdir(path.join(__dirname, 'files-copy'), {recursive: true});
    const copyFiles = await fs.readdir(path.join(__dirname, 'files-copy'), {withFileTypes: true});
    for(let copyFile of copyFiles){
      await fs.unlink(path.join(__dirname, 'files-copy', copyFile.name));
    };  
    const files = await fs.readdir(path.join(__dirname, 'files'), {withFileTypes: true});  
    for(let file of files){
      if (file.isFile()) {
        await fs.copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname, 'files-copy', file.name));
      };
    };
  };
  
  copyDir ();