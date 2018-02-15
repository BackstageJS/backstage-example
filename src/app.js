const path = require('path')
const { getApp } = require('backstage-server')
const { fileSystem } = require('backstage-server/dist/storage-backends/file-system')

getApp(fileSystem(path.join(__dirname, '../files'))).listen(3000)
