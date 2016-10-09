//Reverse a String
//Example:
// I/P = "abc"
// O/P = "cba"

//Javascript
//With for loop
function reverse(string) {
  var result = '';
  for(var i = string.length - 1; i >= 0; i--){
    result += string[i];
  }
  return result;
}
//With while loop
function reverse(string) {
  var i = string.length,
      result = '';
  while (i > 0) {
    result += string.substring(i - 1, i);
    i--;
  }
  return result;
}
//With built-in functions
function reverse(string) {
  return string.split('').reverse().join('');
}
//With function recursion
function reverse(string) {
  if(string.length <= 1){
    return string;
  }
  return reverse(string.substring(1)) + string.charAt(0);
}

//Python
//reverse function
// def reverse(string):
//     return ''.join(reversed(string))

//string[start:stop:step]
// def reverse(string):
//     return string[::-1]
