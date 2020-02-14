const fs = require("fs-extra");
const config = require("./config");
const toDelete = /main-.*.js|index.html|assets|favicon.ico|styles.*.css|polyfills-.*.js|runtime-.*.js|scripts.*.js|3rdpartylicenses.txt/g;

// remove existing
fs.exists(config.rootFolder, exists => {
  if (exists) {
    fs.readdir(config.rootFolder, (err, files) => {
      if (files && files.length > 0)
        files
          .filter(v => v.match(toDelete))
          .forEach(v => {
            fs.remove(config.rootFolder + v);
            console.log(`removed file: ${config.rootFolder + v}`);
          });

      console.log("\nClean up finished\n\nStarting copying new build...!\n");

      // add new
      fs.exists(config.distPath, exists => {
        if (exists) {
          console.log("dist folder - " + config.distPath + " exists!");
          fs.copy(config.distPath, config.rootFolder, function(err) {
            if (err) return console.error(err);
            console.log("overwrite success!");
          });
        } else {
          console.error(
            "adding new build failed, dist folder could not be found"
          );
        }
      });
    });
  } else {
    console.error(
      "Clean up and overwrite both failed , Root folder could not be found!"
    );
  }
});
