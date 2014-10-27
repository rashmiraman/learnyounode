var fs = require('fs');

fs.readFile(process.argv[2], function(err, data){ 
	if(err) {
		throw err;
	} else {
		var str = data.toString();

		var splitText = str.split('\n');

		console.log(splitText.length - 1);
	}
});
