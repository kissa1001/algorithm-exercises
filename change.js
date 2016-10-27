//Problem:
//Given amount that needs to be changed, and denominations array
//Example:
//Input: 123
//Output: 15(12 times 10, 3 times 1)

var denominations = [10, 5, 1];

function getChange(m){
  var v = 0, a = 0;
  for(var i = 0; i < denominations.length; i++){
    if(m === 0){
      return v;
    }
    else if(m >= denominations[i]){
      a = Math.floor(m/denominations[i]);
      v += a;
      m = m % denominations[i];
    }
  }
  return v;
}
