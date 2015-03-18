var fs = require ('fs');
var myBuff = new Buffer(fs.readFileSync(process.argv[2]));
var myString = myBuff.toString();
var myStringArray = myString.split('\n');
console.log (myStringArray.length- 1);
