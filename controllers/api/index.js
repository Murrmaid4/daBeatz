const router = require('express').Router();

const userRoutes = require('./user-routes');
const dbTracks = require('./dbTracks');
const { route } = require('../home-routes');

router.use('/users', userRoutes);
router.use('/data', dbTracks);

module.exports = router;
