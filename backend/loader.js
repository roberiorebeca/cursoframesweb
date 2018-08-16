const server = require('./server/config')
require('./server/database')
require('./server/routes')(server)
