var http = require('http')

var httpClient = http.get(process.argv[2], function(aResponse){
  aResponse.setEncoding("utf8");
  aResponse.on("data", function (chunk){
    console.log(chunk)
  })
  aResponse.on("error", function (e){
    console.log("the error was " + e)
  })
  // aResponse.on("end", function (e){
  //   return;
  // })

})
