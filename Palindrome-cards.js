//Problem
// You are given a set of cards. Each card has a string written on the front and a number on the back.
// The strings on all the cards have the same length.
// You must choose some of these cards (at least one, possibly all)
// and place them in a row with the front sides visible,
// such that the concatenated string is a palindrome
// You are given a list of strings "front"
// and a list of numbers "back" describing the set of cards you are given.
// The i-th card has front[i] written on the front and back[i] on the back

// Find the maximum possible score you can achieve with these cards.
// Score is obtained by summing up all the "back" values that were used

// Sample Input
// abc,abc,def,cba,fed
// 24,7,63,222,190

// Sample Output
// 499



//Helper functions
function isPalindrome(str1, str2){
  if (str1 === str2.split('').reverse().join('')) {
     return true;
  }
}

function isPalindromeByItself(str){
  if (str === str.split('').reverse().join('')) {
     return true;
  }
}

function isSameCharacters(str){
  if(/^(.)\1+$/.test(str)){
    return true;
  }
}

function add(items, prop) {
    return items.reduce( function(a, b){
        return a + b[prop];
    }, 0);
}
//Main function
function processData(input) {
  var frontCards = input[0]; // array of strings
  var backCards = input[1]; // array of numbers
  var cards = frontCards.map(function(front, index){
    return {front: front, back: backCards[index]};
  }); // => [{front: 'abc', value: 1}, {front: 'cba', value: 2}, ...]
  var highestScore;
  var scores = [];

  // For every card find all the cards that are its palindromes.
  // goal => {'abc': [{front: 'cba', value: 2}],
  //          'cba': [{front: 'abc', value: 1}],
  //          'def': [{front: 'fed', value: 8}, {front: 'fed', value: 16}]}
  var matches = {};
  var sum = 0;
  var highest, lowest, finalSum;

  var keyArr = [];
  cards.forEach(function(card){
    var key = card.front;
    matches[key] = cards.filter(function(card){
      return isPalindrome(card.front, key);
    });
  });
  //for every key in matches, find the card with the highest value
  //i.e [ { front: 'cba', back: 7 }, { front: 'cba', back: 40 } ] => 40
  //or if its palindrome of itself, just take sum of them all
  //i.e [ { front: 'aba', back: 7 }, { front: 'aba', back: 40 } ] => 47
  //as aba aba =>palindrome
  console.log(matches);
  for(var key in matches){
   if (matches.hasOwnProperty(key)){
      if(matches[key].length > 1){
        //if palindrome by itself but not same characters
        if(isPalindromeByItself(matches[key][0].front) && !isSameCharacters(matches[key][0].front)){
          sum += add(matches[key], 'back');
        }
        //if palindrome by itself and same characters
        else if(isSameCharacters(matches[key][0].front)){
          if(matches[key].length % 2 === 0){
            sum += add(matches[key], 'back');
          }
          else{
            lowest = Math.min.apply(Math,matches[key].map(function(o){return o.back;}));
            finalSum = add(matches[key], 'back') - lowest;
            sum += finalSum;
          }
        }
        //if not palindrome by itself
        else{
          highest = Math.max.apply(Math,matches[key].map(function(o){return o.back;}));
          sum += highest;
        }
      }
      else if(matches[key].length < 1){
        sum += 0;
      }
      else if(matches[key].length === 1){
        sum += matches[key][0].back;
      }
    }
   }
  return sum;
 }

//Tests
var input1 = [["abc","cba","def","abc","fed"],[24,7,63,222,190]];
var input2 = [["a"],[1]];
var input3 = [["xyx","xyx","xyx","zzz","zzz","zzz"],[5,7,2,1,6,4]];
var input4 = [["aaaaaaaaaaaa","nopalindrome","steponnopets","emordnilapon","aaaaaaaaaaaa","steponnopets","nopalindrome","steponnopets","nopalindrome","bbbbbbbbbbbb","cannotbeused","cannotbeused","steponnopets","aaaaaaaaaaaa","nopalindrome","aaaaaaaaaaaa","nopalindrome","emordnilapon","steponnopets","nopalindrome"],[4096,131072,64,262144,512,1024,65536,2048,32768,1,524288,16384,32,4,16,2,8,128,8192,256]];
var input5 = [["thequickbrownfoxjumpsoverthelazydog"],[1000000]];
var input6 = [["thequickbrownfoxjumpsoverthelazydog","godyzalehtrevospmujxofnworbkciuqeht"],[19,76]];
var input7 = [["fhequickbrownfoxjumpsoverthelazydog","godyzalehtrevospmujxofnworbkciuqeht"],[19,76]];
var input8 = [["thequickbrownfoxjumpsoverthelazydoq","godyzalehtrevospmujxofnworbkciuqeht"],[19,76]];
var input9 = [["thequickbrownfoxjumpsoverthelazydog","qodyzalehtrevospmujxofnworbkciuqeht"],[19,76]];
var input10 = [["thequickbrownfoxjumpsoverthelazydog","godyzalehtrevospmujxofnworbkciuqehf"],[19,76]];
// console.log(processData(input1));
// console.log(processData(input2));
// console.log(processData(input3));
//console.log(processData(input4) + " should be 474854");
// console.log(processData(input5));
// console.log(processData(input6));
// console.log(processData(input7));
// console.log(processData(input8));
// console.log(processData(input9));
// console.log(processData(input10));
