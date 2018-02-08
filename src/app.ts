import * as path from 'path'
import { getApp } from 'treehouse'
import { fileSystem } from 'treehouse/dist/storage-backends/file-system'

getApp(fileSystem(path.join(__dirname, '../files'))).listen(3000)
