//Factorialize a Number 
//Example:
// I/P = 5
// O/P = 120

//using function recursion

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num-1);
}
