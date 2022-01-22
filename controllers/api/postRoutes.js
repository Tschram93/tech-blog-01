const router = require('express').Router();
const { User, Post } = require('../../models/');
const auth = require('../../utils/auth');


router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.findAll({
            include: [{ model: User }]
        })
        res.status(200).json(allPosts)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.post('/', auth, async (req, res) => {
    try {
        const { title, postContent } = req.body
        const newPost = await Post.create(
            {
                title,
                postContent,
                userId: req.session.user_id
            }
        )
        res.status(200).json(newPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', auth, async (req, res) => {
    try {
        Post.destroy({ where: { id: req.params.id }})
        res.status(200).json({ messsage: 'Post deleted!' })
    } catch (err) {
        res.status(500).json(err)
        
    }
})


module.exports = router;