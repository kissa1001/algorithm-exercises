//Confirm the Ending 
Input: "He has to give me a new name", "name"
Output: true

//Using for loop

function confirmEnding(str, target) {
  for(var i = 0; i < str.length; i++){
    var end = str.substr(str.length-target.length, target.length);
    if(end == target){
      return true;
    }
    else{
      return false;
    }
   }
}

//Using ES2015 .endsWith() method

function confirmEnding(str, target) {
  if(str.endsWith(target)){
  	return true;
  }
  else{
  	return false;
  }
}