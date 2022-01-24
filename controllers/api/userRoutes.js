const auth = require('../../utils/auth');
const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', auth, async (req, res) => {
	try {
		const newPost = await Post.create({
			...req.body,
			user_id: req.session.user_id,
			body: req.body.body,
		});

		res.status(200).json(newPost);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.delete('/:id', auth, async (req, res) => {
	try {
		const postData = await Post.destroy({
			where: {
				id: req.params.id,
				user_id: req.session.user_id,
			},
		});

		if (!postData) {
			res.status(404).json({ message: 'Nothing found with this ID!' });
			return;
		}

		res.status(200).json(postData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
