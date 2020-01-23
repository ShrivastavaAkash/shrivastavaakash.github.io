module.exports = {
  parentDirectoryName: "../../../blog",
  filename: "index.html",
  metaDataTSSource: "../app/data/blog-meta.ts",
  metaDataDirectoryName: "data",
  metaDataFileName: "metaData.js",
  templatePath: "./template/helmet.html",
  placeholderInTemplate: {
    header: "<!--???PLACEHOLDER_HEADERS???-->",
    content: "<!--???PLACEHOLDER_CONTENT???-->"
  },
  markdownPath: "../assets/markdowns/",
  distPath: "../../dist/",
  rootFolder: "../../../",
  get metaDataFilePath() {
    return "./" + this.metaDataDirectoryName + "/" + this.metaDataFileName;
  }
};
