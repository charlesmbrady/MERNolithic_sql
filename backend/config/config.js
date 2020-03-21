require('dotenv').config();

module.exports = {
  development: {
    username: process.env.SEQUELIZE_USER,
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'mernolithic_dev',
    details: {
      host: process.env.SEQUELIZE_HOST,
      port: 3306,
      dialect: 'mysql'
    }
  },
  test: {
    username: process.env.SEQUELIZE_USER,
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'mernolithic_test',
    details: {
      host: process.env.SEQUELIZE_HOST,
      port: 3306,
      dialect: 'mysql'
    }
  },
  production: {
    use_env_variable: 'JAWSDB_MARIA_URL',
    // url:
    //   'mysql://oku92haxwe074gx6:pt7uvw59en726iba@u3r5w4ayhxzdrw87.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/pg69vfez19z9ktej',
    details: {
      // host: 'u3r5w4ayhxzdrw87.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      // username: 'oku92haxwe074gx6',
      // password: 'pt7uvw59en726iba',
      // database: 'pg69vfez19z9ktej',
      // port: 3306,
      dialect: 'mysql'
    }
  }
};
