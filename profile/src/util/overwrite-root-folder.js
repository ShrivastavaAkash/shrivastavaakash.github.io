const fs = require("fs-extra");
const config = require("./config");
const toDelete = /main-.*.js|index.html|assets|favicon.ico|styles.*.css|polyfills-.*.js|runtime-.*.js|scripts.*.js|3rdpartylicenses.txt/g;

// remove existing
if (fs.existsSync(config.rootFolder)) {
  let files = fs.readdirSync(config.rootFolder);

  if (files && files.length > 0)
    files
      .filter(v => v.match(toDelete))
      .forEach(v => {
        if (fs.existsSync(config.rootFolder + "/" + v)) {
          fs.remove(config.rootFolder + "/" + v);
          console.log(`removing ${config.rootFolder + "/" + v}...!`);
        }
      });
}

console.log("\nClean up finished\n\nStarting copying new build...!\n");

// add new
if (fs.existsSync(config.distPath)) {
  console.log("target folder - " + config.distPath + " exists!");
  fs.copy(config.distPath, config.rootFolder, function(err) {
    if (err) return console.error(err);
    console.log("overwrite success!");
  });
} else {
  console.log(config.distPath + " folder does not exists!");
}
