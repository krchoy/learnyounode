
var fs = require ('fs');
var myStringArray;
var myString;

function processTheFile(cb) {
//  console.log('1 ' + myString);
  fs.readFile(process.argv[2], function doneReading(err, myBuff){
    myString = myBuff.toString();
//   console.log('2 ' + myString);
    myStringArray = myString.split('\n');
//   console.log('3 ' + myStringArray);
    cb();
  });


}
function writeItOut() {
// console.log ('4 ' + myStringArray);
  console.log (myStringArray.length- 1);
}

// console.log ('0 ');
processTheFile(writeItOut);
