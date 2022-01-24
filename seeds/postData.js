const { Post } = require('../models');

const postInfo = [
	{
		title: "A Pirate's life",
		content:
			"The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!",
	},
	{
		title: 'The Cosmos await',
		content:
			"Take root and flourish the carbon in our apple pies galaxies tendrils of gossamer clouds gathered by gravity realm of the galaxies? Birth star stuff harvesting star light concept of the number one network of wormholes bits of moving fluff permanence of the stars. Jean-François Champollion encyclopaedia galactica made in the interiors of collapsing stars hundreds of thousands with pretty stories for which there's little good evidence a mote of dust suspended in a sunbeam and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
	},
	{
		title: "No! The cat shelter's on to me.",
		content:
			"Ah, yes! John Quincy Adding Machine. He struck a chord with the voters when he pledged not to go on a killing spree. Our love isn't any different from yours, except it's hotter, because I'm involved. Is today's hectic lifestyle making you tense and impatient? Quite possible. We live long and are celebrated poopers. Check it out, y'all. Everyone who was invited is here. Say it in Russian! Oh sure! Blame the wizards!",
	},
];

const seedPost = () => Post.bulkCreate(postInfo);

module.exports = seedPost;
