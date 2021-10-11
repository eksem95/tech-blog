const sequelize = require('../config/connection');
const Entry = require('../models/Entry');
const entryData = require('./entry-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Entry.bulkCreate(entryData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
