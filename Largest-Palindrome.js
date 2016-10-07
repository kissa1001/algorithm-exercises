// Problem Statement

// Imagine we have a large string like this "ABCBAHELLOHOWRACECARAREYOUIAMAIDOINGGOOD" which contains multiple palindromes within it, like ABCBA, RACECAR, ARA, IAMAI etc... Now write a method which will accept this large string and return the largest palindrome from this string. If there are two palindromes which are of same size, return the first palindrome found

// Input Format

// The first line of input will be the String with multiple palindromes

// Sample Input 1:

// ABCBAHELLOHOWRACECARAREYOUIAMAIDOINGGOOD
// Output:

// RACECAR

//Helper function:
function isPalindrome(s) {
  var rev = s.split("").reverse().join("");
  return s == rev;
}

//Method1: Search for potential palindromes by finding same first and last letters.
function longestPalindrome(string) {
  var longest = '';
  for (var i = 0; i < string.length; i++) {
    var currentLetter = string[i];
    var firstOccurance;
    for (var j = i + 1; j < string.length; j++) {
      if (currentLetter === string[j]) {
        firstOccurance = j;
        var subString = string.slice(i, firstOccurance + 1);
        if (subString.length > longest.length && isPalindrome(subString)) {
              longest = subString;
        }
      }
    }
  }
  return longest;
}

//Method 2: Find all possible substrings in string and check if palindrome.
function longestPalindrome(string){
  var longest = '';
  for(var i = 0; i < string.length; i++) {
	var subs = string.substr(i, string.length);
	for(var j=subs.length; j >= 0; j--) {
	  var sub_subs = subs.substr(0, j);
	  if (sub_subs.length <= 1)
		  continue;
      if (sub_subs.length > longest.length && isPalindrome(sub_subs)) {
			longest = sub_subs;
	  }
	}
  }
  return longest;
}
