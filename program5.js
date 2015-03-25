var fs = require ('fs');
var path = require ('path');

myOwnList = undefined

function processDirectory(callback) {

fs.readdir(path.normalize(process.argv[2]), function doneReading(err, myOwnList){

  callback(myOwnList);
  });


}
function writeItOut(myOwnList) {
//  console.log ('9 ' + myOwnList);
  var searchPattern = new RegExp('\.'+process.argv[3]+'$')
  for (var i = 0;i < myOwnList.length; i++){
    if (searchPattern.test(myOwnList[i])){
      console.log(myOwnList[i])
    }
  }
}

// console.log ('0 ');
processDirectory(writeItOut);
