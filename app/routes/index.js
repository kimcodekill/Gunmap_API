//add map_routes as required
const mapRoutes = require('./map_routes');

const statsRoutes = require('./stats_routes');

const logoRoutes = require('./logo_routes');

//add this function to exports
module.exports = function(app, cors, database) {
    mapRoutes(app, cors, database);
    statsRoutes(app, cors, database);
    logoRoutes(app, cors, database);
}
