//Title Case a Sentence 
//Input: "I'm a little tea pot"
//Output: "I'm A Little Tea Pot"

function titleCase(str) {
  var splitedStr = str.split(" ");
  for(var i = 0; i < splitedStr.length; i++){
    splitedStr[i] = splitedStr[i].charAt(0).toUpperCase() + splitedStr[i].slice(1).toLowerCase();
  }
  return splitedStr.join(" ");
}
