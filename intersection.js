/**
 * Created by ekozi on 5/16/2016.
 */
var mongoose = require('mongoose'),
    fs = require('fs'),
    xml2json = require('xml2js'),
    Street = require('./Street'),
    uril = require('util'),
    stream = require('stream'),
    es = require('event-stream'),
    osmium = require('osmtogeojson'),
    mongodbURI = "mongodb://ek5442:NokiaLumia920@ds033875.mongolab.com:33875/movies";
mongoose.connect(mongodbURI);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
var file_path ='C:/Users/ekozi/Downloads/NewYork.osm_01.osm';

var line_number = 0 ;
var s = fs.createReadStream(file_path)
    .pipe(es.split())
    .pipe(es.mapSync(function(line){

            // pause the readstream
            s.pause();

            line_number += 1;

            // process line here and call s.resume() when rdy
            // function below was for logging memory usage
            console.log(line);

            // resume the readstream, possibly from a callback
            s.resume();
        })
        .on('error', function(){
            console.log('Error while reading file.');
        })
        .on('end', function(){
            console.log('Read entire file.')
        })
    );
