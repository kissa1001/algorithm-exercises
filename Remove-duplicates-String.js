//Problem: Write a function that reads a file and excludes duplicate words

//Read a file using Node.js
fs = require('fs');
fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  removeDuplicates(data);
});

function removeDuplicates(data){
  temp = data.split(/[ ,]+/).filter(Boolean);
  newArr = [];
  for(var i = 0; i < temp.length; i++){
    isIn=0;
    for(var j = 0; j < newArr.length; j++){
      if(temp[i] == newArr[j]){
        isIn = 1;
      }
    }
    if(isIn === 0){
      newArr.push(temp[i]);
    }
  }
  console.log(newArr.join(" "));
}
