const path = require('path')
const { backstage } = require('backstage-server')
const { fileSystem } = require('backstage-server/dist/storage-backends/file-system')
const { cookie } = require('backstage-server/dist/package-resolvers/cookie')

const fileDir = path.join(__dirname, '../files')
const storageBackend = fileSystem(fileDir)

backstage({ packageResolver: cookie, storageBackend }).listen(3000)
