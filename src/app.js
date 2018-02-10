const path = require('path')
const { getApp } = require('treehouse')
const { fileSystem } = require('treehouse/dist/storage-backends/file-system')

getApp(fileSystem(path.join(__dirname, '../files'))).listen(3000)
