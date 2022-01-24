const { Post } = require('../models');

const data = [
	{
		name: "A Pirate's life",
		body: "This scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout!!",
	},
	{
		name: 'The Cosmos await',
		body: " Birth star stuff harvesting star light concept of the number one network of wormholes bits of moving fluff permanence of the stars..",
	},
	{
		name: "No! The cat shelter's on to me.",
		body: "Ah, yes! John Quincy Adding Machine. He struck a chord with the voters when he pledged not to go on a killing spree.",
	},
];

const postData = () => Post.bulkCreate(data);

module.exports = postData;