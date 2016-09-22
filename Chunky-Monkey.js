//Chunky Monkey 
//Input: ["a", "b", "c", "d"], 2
//Output: [["a", "b"], ["c", "d"]]

//Using .slice()
function chunkArrayInGroups(arr, size) {
  var arr2 = [];
  for(var i = 0, len = arr.length; i < len; i+=size) {
    arr2.push(arr.slice(0, size));
    arr = arr.slice(size);
  }
  return arr2;
}
