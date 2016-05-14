/**
 * Created by ekozi on 5/14/2016.
 */
var request = require('request');
request("http://www.geographic.org/streetview/view.php?place=%20Franklin%20Ave,%20Brooklyn,%20ny,%20USA",function(error,response,body){
  if(error)
      throw error;
    else
        console.log(body)
})

