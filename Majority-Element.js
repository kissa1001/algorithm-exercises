//Problem
// Check whether an input sequence contains a majority element.
//should be > n/2
//If yes, return 1, if no, return 0

//Examples
//Input: 2 3 9 2 2
//Output: 1

//Input: 1 2 3 1
//Output: 0

//Javascript
function getCandidate(integers){
  var majIndex = 0, count = 1;
  for(var i = 0; i < integers.length; i++){
    if(integers[majIndex] == integers[i]){
      count++;
    }
    else{
      count--;
    }
    if(count === 0){
      majIndex = i;
      count = 1;
    }
  }
  return integers[majIndex];
}

function checkMajority(integers, x){
  var count = 0;
  for(var i = 0; i < integers.length; i++){
    if(integers[i] == x){
      count++;
    }
  }
  if(count > integers.length/2){
    return 1;
  }
  else{
    return 0;
  }
}

function majorityElement(integers){
  var x = getCandidate(integers);
  var answer = checkMajority(integers, x);
  return answer;
}
