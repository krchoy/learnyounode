module.exports = function (fullpath, extension, CB){

var fs = require ('fs');
var path = require ('path');

var myOwnList = undefined




fs.readdir(path.normalize(fullpath), function doneReading(err, myOwnList){
  if (err) return CB(err);
  var searchPattern = new RegExp('\.'+extension+'$');
  var myResultList = new Array();
  for (var i = 0;i < myOwnList.length; i++){
    if (searchPattern.test(myOwnList[i])){
//        console.log(myOwnList[i]);
        myResultList.push(myOwnList[i]);
    }
  }
  CB(null, myResultList);
  });

}
