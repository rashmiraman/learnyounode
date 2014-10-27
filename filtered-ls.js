var fs = require('fs');

fs.readdir(process.argv[2], function(err, list){ 
	if(err) {
		throw err;
	} else {
		var matchExpression = "." + process.argv[3];
 		list.forEach(function(element) {
 			if (element.match(matchExpression)) {
 				console.log(element);
 			}
 		});
	}
});
