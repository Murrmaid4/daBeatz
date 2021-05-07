const router = require('express').Router();
const { Artists } = require('../../models');
const { Op } = require("sequelize");

router.get('/', async (req, res) => {
    try {
        const artistData = await Artists.findAll({});
        res.status(200).json(artistData)
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.get('/genre', async (req, res) => {
    try {
        const genreData = await Artists.findAll({
            where: {
                genres: {
                    // this is to filter out the empty genre set 
                    [Op.ne]: '',
                }
            },

    });
        console.log(genreData)
        
        const genres = genreData.map((genre) => 
        genre.get({ plain: true })
        );

        if (!genreData) {
            res.status(404).json({ message: 'Cannot find that genre' })
            return;
        }
        console.log(genre)
        res.render('userDash', {genres})
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

module.exports = router;