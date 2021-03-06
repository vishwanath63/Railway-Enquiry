'use strict';

var properties = require('../package.json');
var info = require('../tstatus');

var controllers = {
    about: function(req, res){
        var aboutInfo = { name:properties.name, version: properties.version }
        res.json(aboutInfo);
    },
    tstatus_info: function(req, res){
        info.find(req, res, function(err, infor){
            if(err)
                res.send(err);
            res.json(infor);
        });
    },
};

module.exports = controllers;
