const router = require('express').Router();
const { Artists, Tracks } = require('../models');

// GET all for homepage
router.get('/', async (req, res) => {
  try {
    const dbTrackData = await Tracks.findAll({
    
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

// GET one gallery
// router.get('/gallery/:id', async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findByPk(req.params.id, {
//       include: [
//         {
//           model: Painting,
//           attributes: [
//             'id',
//             'title',
//             'artist',
//             'exhibition_date',
//             'filename',
//             'description',
//           ],
//         },
//       ],
//     });

//     const gallery = dbGalleryData.get({ plain: true });
//     res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET one painting
// router.get('/painting/:id', async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });
//     res.render('painting', { painting, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

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

router.get('/dashboard', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  else {
    res.render('userpage');
  }
});

module.exports = router;
