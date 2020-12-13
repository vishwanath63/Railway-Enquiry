'use strict' ;
const controller = require('./controller');
module.exports = function(app){
    app.route('/about')
        .get(controller.about);
    app.route('/lstatus/:stationcode/:time')
        .get(controller.lstatus_info);
};