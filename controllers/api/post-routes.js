const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// get all posts
router.get('/', (req, res) => {
    Post.findAll({
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get single post by id

// create post

// update post

// delete post


module.exports = router;
