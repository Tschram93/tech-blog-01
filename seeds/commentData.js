const { Comment } = require('../models');

const comments = [
	{
		comment_text:
			'She did at last extort from her father an acknowledgment that the horses were engaged. Jane was therefore obliged to go on horseback, and her mother attended her to the door with many cheerful prognostics of a bad day. Her hopes were answered; Jane had not been gone long before it rained hard. Her sisters were uneasy for her, but her mother was delighted. The rain continued the whole evening without intermission; Jane certainly could not come back.',
		user_id: 1,
		post_id: 3,
	},
	{
		comment_text:
			`I can’t do that as Bruce Wayne… as a man. I’m flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.`,
		user_id: 2,
		post_id: 2,
	},
	{
		comment_text:
			'copyright CNN leaves it there attracting young readers, Android advertising Flipboard right-sizing location-based',
		user_id: 3,
		post_id: 1,
	},
];

const commentData = () => Comment.bulkCreate(comments);

module.exports = commentData;
