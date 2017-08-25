function calculateFibonacci(sequenceLength) {
  // DECLARE AN ARRAY FOR HOLDING VALUES
  var fibum = [];  
  // CREATE A LOOP TO CALCULATE THE FIBONACCI SEQUENCE
  for(i=0;i<sequenceLength;i++){
      if(i>1){     
          fibum.push(fibum[i-2] + fibum[i-1]);  
      } else{
          fibum.push(i);
      }
  }
  // RETURN THE ARRAY THAT SHOULD NOW HOLD THE FIBONACCI SEQUENCE
  return fibum;
}

function printArray(arrayToPrint) {
  // CREATE A LOOP TO DISPLAY THE CONTENTS OF arrayToPrint
  //refactor string
  var newstr = arrayToPrint.join(", ").toString();
  
  //print string
  console.log(newstr);
}

var sequence = calculateFibonacci(10);
printArray(sequence);

// EXPECTED OUTPUT:
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34

// BONUS POINTS IF YOU GET: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// HINT: array.join()
