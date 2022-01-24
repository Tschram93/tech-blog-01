const auth = require('../../utils/auth');
const post = require('express').Router();
const { User, Post, Comment } = require('../../models');

post.get('/', async (req, res) => {
	try {
		const posts = await Post.findAll({
			include: [
				{
					model: Comment,
					attributes: [
						'id',
						'comment_text',
						'user_id',
						'post_id',
						'created_at',
					],
					include: { model: User, attributes: ['username'] },
				},
				{ model: User, attributes: ['username'] },
			],
		});
		res.status(200).json(posts);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

post.get('/:id', async (req, res) => {
	try {
		const post = await Post.findByPk(req.params.id, {
			include: [
				{
					model: Comment,
					attributes: [
						'id',
						'comment_text',
						'user_id',
						'post_id',
						'created_at',
					],
					include: { model: User, attributes: ['username'] },
				},
				{ model: User, attributes: ['username'] },
			],
		});
		if (!post) {
			res.status(400).json({ message: 'No Post found with that ID' });
			return;
		}
		res.status(200).json(post);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

post.post('/', auth, async (req, res) => {
	try {
		const newPost = await Post.create({
			title: req.body.title,
			content: req.body.content,
			user_id: req.session.user_id,
		});

		res.status(200).json(newPost);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

post.put('/:id', auth, async (req, res) => {
	try {
		const updatePost = await Post.update(
			{
				title: req.body.title,
				content: req.body.content,
			},
			{
				where: { id: req.params.id },
			}
		);
		if (!updatePost) {
			res.status(400).json({ message: 'No Post found with that ID' });
		}
		res.status(200).json({ message: 'Post successfully updated!' });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

post.delete('/:id', auth, async (req, res) => {
	try {
		const delPost = await Post.destroy({
			where: {
				id: req.params.id,
			},
		});
		if (!delPost) {
			res.status(400).json({ message: 'No post with that ID found' });
		}
		res.status(200).json({ message: 'Post successfully deleted!' });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = post;
