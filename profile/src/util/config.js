module.exports = {
    parentDirectoryName: "../../../blog",
    filename: "index.html",
    metaDataTSSource: "../app/data/blog-meta.ts",
    metaDataDirectoryName: "data",
    metaDataFileName: "metaData.js",
    templatePath: "./template/helmet.html",
    placeholderInTemplate: "<!--???PLACEHOLDER???-->",
    distPath: "../../dist/",
    rootFolder: "../../../",
    get metaDataFilePath () {
        return "./" + this.metaDataDirectoryName + "/" + this.metaDataFileName
    }
}