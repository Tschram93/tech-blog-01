const auth = require('../../utils/auth');
const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', (req, res) => {
	Comment.findAll({})
		.then((dbCommentData) => res.json(dbCommentData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.post('/', auth, async (req, res) => {
	try {
		const newComment = await Comment.create({
			...req.body,
			user_id: req.session.user_id,
			post_id: req.body.post_id,
		});

		res.status(200).json(newComment);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.delete('/:id', auth, async (req, res) => {
	try {
		const commentData = await Comment.destroy({
			where: {
				id: req.params.id,
			},
		});

		if (!commentData) {
			res.status(404).json({ message: 'Nothing found with this ID!' });
			return;
		}

		res.status(200).json(postData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
