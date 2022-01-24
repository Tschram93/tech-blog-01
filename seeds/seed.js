const sequelize = require('../config/connection');
const commentData = require('./commentData');
const postData = require('./postData');
const userData = require('./userData');

const seedAll = async () => {
	await sequelize.sync({ force: true });

	console.log('\n----- DATABASE SYNCED -----\n');
	await userData();
	console.log('\n----- USERS SEEDED -----\n');
	await postData();
	console.log('\n----- POSTS SEEDED -----\n');
	await commentData();
	console.log('\n----- COMMENTS SEEDED -----\n');

	process.exit(0);
};

seedAll();
