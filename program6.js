var mymodule = require ('./program6_called.js')

mymodule(process.argv[2],process.argv[3],function writeItOut(err,myResultList){
  myResultList.forEach(function (line){console.log(line)})
})
