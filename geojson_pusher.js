/**
 * Created by ekozi on 5/17/2016.
 */
var fs = require('fs'),
    Street = require('./Street'),
    mongoose = require('mongoose'),
    request = require('request'),
    mongodbURI = "mongodb://ek5442:NokiaLumia920@ds033875.mongolab.com:33875/movies";
mongoose.connect(mongodbURI);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
request('http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nyzd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=json',function(err,response,body){

    if (err){
        throw err;
    }

    else {
        console.log(body)
        fs.writeFile('new_york.json',body,function(err,data){
            if (err)
                throw err;
            else
                console.log(data);
        })
    }

});
// fs.readdir('C:/Users/ekozi/Downloads/geojson-master/geojson-master',function(err,data){
//     if(err)
//         throw err;
//     else{
//         data.map(function(el){
//             return el.split(".")[1]==='geojson';
//         })
//         fs.readFile('C:/Users/ekozi/Downloads/geojson-master/geojson-master/'+data[1],'utf8',function(err,data){
//             if(err)
//                 throw err;
//            else{
//                 var coordinate_obj = JSON.parse(data);
//
//                 console.log(coordinate_obj)
//
//             }
//         })
//     }
