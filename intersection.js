/**
 * Created by ekozi on 5/16/2016.
 */
var mongoose = require('mongoose'),
    fs = require('fs'),
    xml2json = require('xml2js'),
    Street = require('./Street'),
    osmium = require('osmtogeojson'),
    mongodbURI = "mongodb://ek5442:NokiaLumia920@ds033875.mongolab.com:33875/movies";
mongoose.connect(mongodbURI);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
osmium('C:/Users/ekozi/Downloads/NewYork.osm_01.osm');

// var parser = new xml2json.Parser(function(result,error){
//     if(error)
//         throw error;
//
// });
//
// fs.readFile('C:/Users/ekozi/Downloads/NewYork.osm_01.osm',function (err,data) {
//     if(parser.parseString(data)){
//         console.log('successfuly parsed file');
//     }else{
//         console.error("Error parsing file");
//     }
//
// });
//
