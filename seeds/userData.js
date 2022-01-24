const { User } = require('../models');

const data = [
	{
		name: 'devun',
		email: 'devun@gmail.com',
		password: 'password12345',
	},
	{
		name: 'tschram',
		email: 'tschram93@gmail.com',
		password: 'password12345',
	},
	{
		name: 'Amiko',
		email: 'Amiko123@aol.com',
		password: 'password12345',
	},
];

const userData = () => User.bulkCreate(data);

module.exports = userData;