const User = require('./User');
const Tracks = require('./Tracks');
const Artists = require('./Artists');

// Tracks.hasMany(Artists, {
//   foreignKey: 'gallery_id',
// });

// Artists.belongsTo(Tracks, {
//   foreignKey: 'gallery_id',
// });

module.exports = { User, Tracks, Artists };
