const parse = require('pg-connection-string').parse;

const config = parse('postgresql://neondb_owner:3bz8MqdtYael@ep-quiet-silence-a5on69zg.us-east-2.aws.neon.tech/neondb?sslmode=require');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,  // This ensures SSL is used, but without rejecting self-signed certificates
      },
    },
    debug: false,
  },
});
