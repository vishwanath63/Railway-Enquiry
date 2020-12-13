'use strict' ;
const controller = require('./controller');
module.exports = function(app){
    app.route('/about')
        .get(controller.about);
    app.route('/seatava/:trainnum/:frmstn/:tostn/:date/:class')
        .get(controller.seatava_info);
};