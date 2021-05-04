const User = require('./User');
const Tracks = require('./Tracks');
const Artists = require('./Artists');

// Gallery.hasMany(Painting, {
//   foreignKey: 'gallery_id',
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: 'gallery_id',
// });

module.exports = { User, Tracks, Artists };
