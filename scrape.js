/**
 * Created by ekozi on 5/14/2016.
 */
var request = require('request'),
    cheerio = require('cheerio'),
    mongoose = require('mongoose'),
    Street = require('./Street'),
    mongodbURI = "mongodb://ek5442:NokiaLumia920@ds033875.mongolab.com:33875/movies";
mongoose.connect(mongodbURI);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));

var DEFAULT_URL = "http://www.geographic.org/streetview/usa/ny";
var New_York_Counties = ['brooklyn','bronx'];


New_York_Counties.filter(function(el){

    var request_url = DEFAULT_URL+"/"+el+".html";

    request(request_url,function(error,response,html){
        if(error)
            throw error;
        else{
            var $ = cheerio.load(html);
            $('.listspan').children().each(function(){
                var data = $(this);
                data.children().next().children().each(function(){
                    var data = $(this);
                    var street = new Street({
                        street_name:data.text(),
                        
                    })
                    console.log(data.attr('href')+"-"+data.text();
                })
            })
        }

    })
})
// /html/body/div[3]/div/span/ul