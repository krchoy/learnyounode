module.exports = function (fullpath, extension, CB){

var fs = require ('fs');
var path = require ('path');

var myOwnList = undefined

fs.readdir(path.normalize(fullpath), function doneReading(err, myOwnList){
  if (err) return CB(err);
  myOwnList = myOwnList.filter(function (line){return path.extname(line) === '.' + extension})
  CB(null, myOwnList);
  }
)
}
