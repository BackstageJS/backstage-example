const path = require('path')
const { backstage } = require('backstage-server')
const { fileSystem } = require('backstage-server/dist/storage-backends/file-system')

backstage(fileSystem(path.join(__dirname, '../files'))).listen(3000)
