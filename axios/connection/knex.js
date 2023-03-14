const config = require('../connection/config')

const knex = require('knex')({
    client: "mysql",
    connection: {
        port: config.port,
        host: config.mysql.host,
        user: config.mysql.user,
        password: config.mysql.password,
        database: config.mysql.database
    }
})

knex.raw('SELECT 1').then(() => console.log('MySQL is connected'))
    .catch((err) => console.log(err))

module.exports = knex