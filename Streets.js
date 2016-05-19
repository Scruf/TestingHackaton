/**
 * Created by ekozi on 5/14/2016.
 */
var fs = require('fs');
var mongoose = require('mongoose');
    


fs.readFile('new_york.json',function(err,data){
    if (err)
        throw err;
    else{
        var obj = JSON.parse(data);
       obj.features.filter(function(el){
            el.geometry.rings.filter(function(el){
                el.filter(function(el){
                    console.log(el);
                })
            });
       })
    }
});