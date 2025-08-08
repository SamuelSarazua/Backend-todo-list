const mysql2 = require('mysql2');

const pool = mysql2.createPool({
  host: 'bppuk31p1akdgq4ebzuo-mysql.services.clever-cloud.com',
  user: 'uytb2mxqbv6bcgkm',
  password: 'z9sdWcTnzmMuzdEgRELN',
  database: 'bppuk31p1akdgq4ebzuo',
});

module.exports = pool.promise();