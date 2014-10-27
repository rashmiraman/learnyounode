// Option 1 - Rashmi
var sum = 0;

if(process.argv.length > 2) {
	var arr = process.argv.slice(2);

	for (var i=0; i < arr.length; i++) {
		sum += Number(arr[i]);
	}

	console.log(sum);
} else {
	console.log("");
}

// Option 2 - Joanne

var result = 0
    
for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])

console.log(result);