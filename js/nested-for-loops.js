/**
 * Returns a string representation of a 2-dimensional data structure 
 * @param {number} depth 
 * @param {number} [width=depth] 
 * @returns {string}
 */
function nestedForLoops (depth, width = depth) {
  let result = "\n";

  // Write code here
  for(let y=0; y<depth; y++){
    
    for(let x=0; x<width; x++){
      let newStr = '{x:' + x + ', y:' + y + '}, ';
      result+=newStr;
    }

    //Removes last ', ' from string result before adding '\n'
    result = result.slice(0, -2);
    result+='\n';
  }
  return result.toString();
};

// To see your console output outside the tests add function calls here.
// console.log(nestedForLoops(5));
