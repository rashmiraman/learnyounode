var myModule = require("./modular");

myModule(process.argv[2], process.argv[3], function(err, data) {
	if(err) {
		throw err;
	}else {
		data.forEach(function(element) {
			console.log(element);	
		});
	}
});