const seedUser = require('./userData');
const seedPost = require('./postData');

const sequelize = require('../config/connection');

const seedAll = async () => {
	await sequelize.sync({ force: true });
	console.log('\n----- DATABASE SYNCED ----- \n');
	await seedUser();
	console.log('\n----- USERS SYNCED -----\n');
	await seedPost();
	console.log('\n----- POSTS SYNCED -----\n');

	process.exit(0);
};

seedAll();
