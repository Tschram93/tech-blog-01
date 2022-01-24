const { User } = require('../models');

const data = [
	{
		username: 'devun',
		password: 'password12345',
	},
	{
		username: 'tschram',
		password: 'password12345',
	},
	{
		username: 'Amiko',
		password: 'password12345',
	},
];

const userData = () => User.bulkCreate(data);

module.exports = userData;