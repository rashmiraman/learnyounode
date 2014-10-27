var fs = require('fs');

module.exports = function(pathToFile, extension, callback) { 

	fs.readdir(pathToFile, function(err, list){ 
		if(err) {
			return callback(err);
		} else {
			var matchExpression = "." + extension;
			var result = [];
	 		list.forEach(function(element) {
	 			if (element.match(matchExpression)) {
	 				result.push(element);
	 			}
	 		});
	 		callback(null, result);
		}
	});
}
