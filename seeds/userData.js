const { User } = require('../models');

const userInfo = [
	{

		username: 'Travis',
		email: 'tschram93.dev@gmail.com',
		password: 'password12345',
	},
	{
		username: 'John',
		email: 'JohnDoe@gmail.com',
		password: 'password12345',
	},
	{
		username: 'Amiko',
		email: 'AmikoTote@aol.com',
		password: 'password12345',
	},
];

const seedUser = () => User.bulkCreate(userInfo);

module.exports = seedUser;
