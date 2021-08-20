const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'alex',
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    password: 'password123'
  },
  {
    username: 'iboddam2',
    password: 'password123'
  },
  {
    username: 'dstanmer3',
    password: 'password123'
  },
  {
    username: 'djiri4',
    password: 'password123'
  },
  {
    username: 'msprague5',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
