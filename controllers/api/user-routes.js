const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// get all users
router.get('/', (req, res) => {
    User.findAll({
        // attributes: { exclude: ['password'] }//will uncomment after testing
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});





module.exports = router;
