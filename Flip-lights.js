  // Problem Statement
  // You have a grid of lights. Each light is initially either off or on.
  //Every column in the grid has a switch and when the switch is flipped,
  //all the lights in that column reverse states
  // Given a array Q of Strings, where the j-th character of the i-th element is 'Y'
  // if the light in row i, column j is initially on, and 'N' otherwise,
  //find the largest number of rows that can be lit after performing exactly M flips
  // A row in the grid is considered lit if all the lamps in that row are on
  //and M flips do not necessarily have to be on M distinct switches
  //Sample Input:
  // NY,YN,YN
  // 1
  // Sample Output:
  // 2

  var splited = input.split('\n');
  var twoDArr = splited.map(function(s) {
      return s.split(',');
  });
  var input1 = twoDArr[0].map(function(s) {
      return s.split('');
  });
  var input2 = parseInt(twoDArr[1], 10);

  function processedData(input, num) {
      function checkN(array) {
          var count = 0;
          for (var i = 0; i < array.length; i++) {
              if (array[i] === "N") {
                  count++;
              }
          }
          if (count <= num && (num - count) % 2 === 0) {
              return array;
          }
      }
      //get 1D Array
      function get1DArray(arr) {
          var newArr = [];
          for (var i = 0; i < arr.length; i++) {
              newArr.push(arr[i].join());
          }
          return newArr;
      }
      //check most repeated
      function mostRepeated(arr) {
          if (arr.length === 0) {
              return null;
          }
          var modeMap = {};
          var maxEl = arr[0],
              maxCount = 1;
          for (var i = 0; i < arr.length; i++) {
              var el = arr[i];
              if (modeMap[el] === null)
                  modeMap[el] = 1;
              else
                  modeMap[el]++;
              if (modeMap[el] > maxCount) {
                  maxEl = el;
                  maxCount = modeMap[el];
              }
          }
          return maxCount;
      }

      //filter out
      var filteredInput = input.filter(checkN);
      var filteredInput1D = get1DArray(filteredInput);

      if (filteredInput.length === 0) {
          return 0;
      } else {
          if (mostRepeated(filteredInput1D) > 1) {
              return mostRepeated(filteredInput1D);
          }
          else {
              return filteredInput.length;
          }
      }
  }
  console.log(processedData(input1, input2));
