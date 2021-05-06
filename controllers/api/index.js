const router = require('express').Router();
const userRoutes = require('./user-routes');
const dbTracks = require('./dbTracks')

router.use('/users', userRoutes);
router.use('/data', dbTracks)


module.exports = router;
