const auth = require('../../utils/auth');
const comment = require('express').Router();
const { User, Post, Comment } = require('../../models');

comment.get('/', async (req, res) => {
	try {
		const comments = await Comment.findAll({
			include: [
				{ model: User, attributes: ['username'] },
			],
			order: [['created_at', 'DESC']],
		});
		res.status(200).json(comments);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

comment.get('/:id', async (req, res) => {
	try {
		const comment = await Comment.findByPk(req.params.id, {
			where: {
				id: req.params.id,
			},
		});
		if (!comment) {
			res.status(400).json({ message: 'No comment with that ID found' });
		}
		res.status(200).json(comment);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

comment.post('/', auth, async (req, res) => {
	try {
		const newPost = await Comment.create({
			comment_text: req.body.comment_text,
			post_id: req.body.post_id,
			user_id: req.session.user_id,
		});
		res.status(200).json(newPost);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

comment.put('/:id', auth, async (req, res) => {
	try {
		const updateComment = await Comment.update(
			{
				comment_text: req.body.comment_text,
			},
			{
				where: { id: req.params.id },
			}
		);
		if (!updateComment) {
			res.status(400).json({ message: 'No Comment with that ID found' });
		}
		res.status(200).json({ message: 'Comment updated!' });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

comment.delete('/:id', auth, async (req, res) => {
	try {
		const del = await Comment.destroy({
			where: { id: req.params.id },
		});
		if (!del) {
			res.status(400).json({ message: 'No Comment with that ID found' });
		}
		res.status(200).json({ message: 'Comment deleted' });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = comment;
