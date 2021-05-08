const router = require('express').Router();
const { Artists, Tracks } = require('../models');

// GET all for homepage
router.get('/', async (req, res) => {
  try {
    const dbTrackData = await Tracks.findAll({
    limit: 5, offset: 5, order:[ ['popularity', 'desc']]
    });

    const tracks = dbTrackData.map((tracks) =>
      tracks.get({ plain: true })
      
    );
    res.render('homepage', {
      tracks,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});



// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
 else{
  res.render('login');
 }
});


router.get('/dashboard', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  try {
    const dbTrackData = await Tracks.findAll({
    limit: 5, offset: 5, order:[ ['popularity', 'desc']]
    }); 

    const tracks = dbTrackData.map((tracks) =>
      tracks.get({ plain: true })
      );
  
    res.render('userDash',{loggedIn:req.session.loggedIn, tracks
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/playlists', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  try {
    const dbTrackData = await Tracks.findAll({
   
    }); 

    const tracks = dbTrackData.map((tracks) =>
      tracks.get({ plain: true })
      );
  
    res.render('playlist',{loggedIn:req.session.loggedIn, tracks
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
