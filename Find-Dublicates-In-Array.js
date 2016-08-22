//Find dublicated in array
//Example:
// I/P = [1, 2, 4, 2, 3, 1, 5]
// O/P = [1, 2]

//Javascript
//using forEach. Time com­plex­ity : O(n) 
function findDublicate(arr){
	var result = [];
	arr.forEach(function(number, index){
		if(arr.indexOf(number, index + 1) > -1){
			if(result.indexOf(number) === -1){
				result.push(number);
			}
		}
	});
	return result;
}
//With for loop
function findDublicate(arr){
	var sorted = arr.sort();
	var result = [];
	for( var i = 0; i < arr.length - 1; i++){
		if(sorted[i+1] == sorted[i]){
			result.push(sorted[i]);
		}
	}
	return result;
}

