//Given an array of positive integers. 
//All numbers occur even number of times except one number which occurs odd number of times. 
//Find the number!

// Example:
// I/P = [1, 2, 3, 2, 3, 1, 3]
// O/P = 3

//JavaScript
//Simple solution. Time complexity: O(n^2). Space complexity: O(1)
function getOddOccurrence(arr){
	for(var i = 0; i < arr.length; i++){
		var count = 0;
		for(var j = 0; j < arr.length; j++){
			if(arr[i] === arr[j]){
				count++;
			}
		}
		if(count % 2 !== 0){
			return arr[i];
		}
	}
}
//Better solution.Time complexity: O(n). Space complexity: O(n)
function getOddOccurrence(arr){
	var numbers = {};
	arr.forEach( function(num){
		if(!numbers[num]){
			numbers[num] = 0
		}
		numbers[num] += 1;
	})
	for( var occ in numbers){
		if(numbers[occ] % 2 !== 0){
			return parseInt(occ);
		}
	}
}
//Best Solution. Time complexity: O(n). Space complexity: O(1)
function getOddOccurrence(arr){
	var result = 0;
	for(var i = 0; i < arr.length; i++){
		result = result ^ arr[i];
	}
	return result;
}

//Python
def getOddOccurrence(arr):
    res = 0
    for element in arr:
        res = res ^ element
    return res

