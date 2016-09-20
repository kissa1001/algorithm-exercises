//Repeat a string num times
//Input: "abc" , 3
//Output: "abcabcabc"


//Using javascript .repeat() method
function repeatStringNumTimes(str, num) {
  if(num <= 0){
    return "";
  }
  else{
    return str.repeat(num);
  }
}