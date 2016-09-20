//Find the Longest Word in a String
//Input: "The quick brown fox jumped over the lazy dog"
//Output: 6


//Using for loop
function findLongestWord(str) {
  var splited = str.split(" ");
  var longest = 0;
  for(var i = 0; i < splited.length;i++){
    if(splited[i].length > longest){
      longest = splited[i].length;
    }
  }
  return longest;
}