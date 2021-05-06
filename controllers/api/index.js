const router = require('express').Router();
const userRoutes = require('./user-routes');
const dbTracks = require('./dbTracks')
const dbArtists = require('./dbArtists')

router.use('/users', userRoutes);
router.use('/data', dbTracks);
router.use('/artistData', dbArtists);


module.exports = router;
