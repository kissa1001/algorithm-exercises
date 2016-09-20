//Truncate a string 
//Input: "A-tisket a-tasket A green and yellow basket", 11
//Output: "A-tisket..."

function truncateString(str, num) {
  if (str.length > num && num > 3) {
    return str.slice(0, num - 3) + "...";
  }
  else if(str.length > num && num <= 3){
    return str.slice(0, num) + "...";
  }
  else{
    return str.slice(0, num);
  }
}