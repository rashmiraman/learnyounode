var fs = require('fs')
var myFile = fs.readFileSync(process.argv[2]);

var str = myFile.toString();

var splitText = str.split('\n');

console.log(splitText.length - 1);
