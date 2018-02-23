const path = require('path')
const { backstage } = require('backstage-server')
const { fileSystem } = require('backstage-server/dist/storage-backends/file-system')

const fileDir = path.join(__dirname, '../files')
const storageBackend = fileSystem(fileDir)

backstage({ storageBackend }).listen(3000)
