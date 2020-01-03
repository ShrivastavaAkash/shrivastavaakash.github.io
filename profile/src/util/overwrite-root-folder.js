const fs = require("fs-extra");
const config = require("./config");

if (fs.existsSync(config.distPath)){ 
    console.log(config.distPath + " folder exists!");
    fs.copy(config.distPath, config.rootFolder, function (err) {
        if (err) return console.error(err)
        console.log('overwrite success!')
    });
} else {
    console.log(config.distPath + " folder does not exists!");
}