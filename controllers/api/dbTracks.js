const router = require('express').Router();
const { Tracks } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const trackData = await Tracks.findAll({});
        res.status(200).json(trackData)
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/song/:name', async (req, res) => {
    
    try {
        const trackData = await Tracks.findOne({ where: {
            name: req.params.name 
        }
    });
        console.log(trackData)
        const track = trackData.map((track) =>
        track.get({ plain: true })
      );

        
        if (!trackData) {
            res.status(404).json({ message: 'Cannot find that song!'});
            return;
        }
        console.log(track)
        res.status(200).json(track);
    } catch (err) {
        res.status(500).json(err)
    }
});



router.get('/artist/:artists', async (req, res) => {
    console.log(req.params.artist)
    try {
        const artistData = await Tracks.findAll({ 
            where: {
                artists: req.params.artists,
            }
        });
        
        console.log(artistData)  

        const artist = artistData.map((artist) =>
        artist.get({ plain: true })
      );

        if (!artist) {
            res.status(404).json({ message: 'Cannot find that artist!'});
            return;
        }

        res.render('userpage', {artist})
    } catch (err) {
        res.status(500).json(err)
    }
   
});


module.exports = router;