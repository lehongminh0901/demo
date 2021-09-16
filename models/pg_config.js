const Pool = require('pg').Pool;

const pg_conn = new Pool (
    {
        user: 'igmqemotovsvou',
        host: 'ec2-44-198-100-81.compute-1.amazonaws.com',
        database: 'd6uaihni402ouf',
        password: '441cf018075b3c9eace22080b2718710165b7dfb9b0543435770041719a77750',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
          },
    });

module.exports = pg_conn;