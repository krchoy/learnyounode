var mymodule = require ('./program6_called.js')

mymodule(process.argv[2],process.argv[3],function writeItOut(err,myResultList){
  for (var j = 0 ; j < myResultList.length;j++){
    console.log(myResultList[j])
  }
})
